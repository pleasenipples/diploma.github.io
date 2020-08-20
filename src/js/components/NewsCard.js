export default class NewsCard {
    constructor(data, template, convertDate) {
        this.data = data;
        this.template = template;
        this._toConvertData = convertDate;
        this.backupNewsImage = 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';
        this._handleOpenNews = this._handleOpenNews.bind(this);
    }

    _handleOpenNews () {
        if(this.data.url)window.open(this.data.url);
    }

    getNewsCard () {
        this.newCardElement = this.template.cloneNode(true);
        this.newCardElement.querySelector('.result-card__image').style.backgroundImage = (this.data.urlToImage === null) ? 'url(' + this.backupNewsImage + ')'  : 'url(' + this.data.urlToImage + ')' ;
        this.newCardElement.querySelector('.result-card__image').addEventListener('click', this._handleOpenNews);
        this.newCardElement.querySelector('.result-card__date').textContent = this._toConvertData(this.data.publishedAt);
        this.newCardElement.querySelector('.result-card__title').textContent = this.data.title;
        this.newCardElement.querySelector('.result-card__description').textContent = this.data.description;
        this.newCardElement.querySelector('.result-card__source').textContent = this.data.source.name;
        return this.newCardElement;
    }
}