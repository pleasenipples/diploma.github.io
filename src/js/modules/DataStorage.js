export default class DataStorage {
    constructor() {
    }

    setLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    getLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    clearLocalStorage() {
        localStorage.clear();
    }

    setSessionStorage(key, data) {
        sessionStorage.setItem(key, JSON.stringify(data));
    }

    getSessionStorage(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }

    clearSessionStorage() {
        sessionStorage.clear();
    }
}