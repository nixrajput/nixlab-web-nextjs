import ApiUrls from "../constants/urls";
import axios from 'axios';

async function apiClient(endpoint, method, { body, ...options } = {}) {
    let headers = { 'Content-Type': 'application/json' };

    if (options && options.headers) {
        if ('Content-Type' in options.headers) {
            headers['Content-Type'] = options.headers['Content-Type'];
        }

        headers = {
            ...headers,
            ...options.headers,
        }
    }

    const config = {
        method: method || 'GET',
        headers: headers,
    }

    if (body) {
        config.data = JSON.stringify(body);
    }

    const baseUrl = process.env.API_URL || ApiUrls.baseUrl;

    try {
        const response = await axios(`${baseUrl}${endpoint}`, config);
        let data = response.data;
        data.status = response.status;
        if (process.env.NODE_ENV !== 'production') {
            console.table({
                endpoint,
                status: response.status,
                data: data,
            });
        }
        if (response.status === 200 || response.status === 201) {
            return data;
        }
        else {
            return new Error(data.message || 'Something went wrong');
        }
    }
    catch (error) {
        console.log('apiClientError:', error);
        return new Error(error.response.data.message || error.message);
    }
}

apiClient.get = function (endpoint, options) {
    return apiClient(endpoint, 'GET', { ...options });
}

apiClient.post = function (endpoint, body, options) {
    return apiClient(endpoint, 'POST', { body, ...options });
}

apiClient.put = function (endpoint, body, options) {
    return apiClient(endpoint, 'PUT', { body, ...options });
}

apiClient.delete = function (endpoint, options) {
    return apiClient(endpoint, 'DELETE', { ...options });
}

export default apiClient;