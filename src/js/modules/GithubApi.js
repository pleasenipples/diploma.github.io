export default class GithubApi {
    constructor (apiParams) {
        this.apiParams = apiParams || {};
    }

    getCommits() {
        return fetch(this.apiParams.address, {
            'method': "GET",
            'headers': this.apiParams.headers
        })
            .then(res => res.ok ? res.json() : Promise.reject())
            .catch(e => alert('Ошибка загрузки коммитов!'))
    }
}