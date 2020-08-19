export default class NewsApi {
    constructor (apiParams, request, preloaderCallback) {
        this.apiParams = apiParams || {};
        this.request = request;
        this.preloaderCallback = preloaderCallback || (() => {});
    }

    getNews() {
        this.preloaderCallback(true);
        return fetch(`${this.apiParams.address}&q=${this.request}&apiKey=${this.apiParams.apiKey}&from=${this.apiParams.from}&to=${this.apiParams.to}`, {
        })
            .then(res => res.ok ? res.json() : Promise.reject())
            .catch(e => alert('Ошибка загрузки новостей!'))
            .finally(() => {
                this.preloaderCallback(false)
            })
    }
}