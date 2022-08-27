import { useState, useEffect } from 'react'

const useStorage = (key) => {
    const [value, setValue] = useState(null);

    useEffect(() => {
        const storageValue = localStorage.getItem(key);
        if (storageValue) {
            setValue(storageValue);
        }
    }, [key]);

    return [value, setValue];
}

export default useStorage;