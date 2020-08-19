export default class CommitCard {
    constructor(data, template, convertDate) {
        this.data = data;
        this.template = template;
        this._toConvertData = convertDate;
        this._backupImage = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
    }

    getCommitCard () {
        this.newCardElement = this.template.cloneNode(true);
        (this.data.author === null) ? this.newCardElement.querySelector('.slider-card__avatar').setAttribute('src', this._backupImage) : this.newCardElement.querySelector('.slider-card__avatar').setAttribute('src', this.data.author.avatar_url);
        this.newCardElement.querySelector('.slider-card__date').textContent = this._toConvertData(this.data.commit.committer.date);
        this.newCardElement.querySelector('.slider-card__author-mail').textContent = this.data.commit.committer.email;
        this.newCardElement.querySelector('.slider-card__comment').textContent = this.data.commit.message;
        this.newCardElement.querySelector('.slider-card__author-name').textContent = this.data.commit.committer.name;
        return this.newCardElement;
    }

}