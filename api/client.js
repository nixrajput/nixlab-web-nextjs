
export async function client(endpoint, method, { body, ...options } = {}) {
    const headers = { 'Content-Type': 'application/json' };

    const config = {
        method: method || 'GET',
        ...options,
        headers: {
            ...headers,
            ...options.headers,
        }
    }

    if (body) {
        config.body = JSON.stringify(body);
    }

    const baseUrl = process.env.API_URL || 'https://social-api.nixlab.co.in/api/v1';

    let data;
    try {
        const response = await window.fetch(`${baseUrl}${endpoint}`, config);
        data = await response.json();
        if (response.ok) {
            return data;
        }
        throw new Error(data.message);
    }
    catch (error) {
        return Promise.reject(error.message ? error.message : data.message);
    }
}

client.get = function (endpoint, options) {
    return client(endpoint, 'GET', { ...options });
}

client.post = function (endpoint, body, options) {
    return client(endpoint, 'POST', { body, ...options });
}

client.put = function (endpoint, body, options) {
    return client(endpoint, 'PUT', { body, ...options });
}

client.delete = function (endpoint, options) {
    return client(endpoint, 'DELETE', { ...options });
}