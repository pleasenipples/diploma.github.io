import List from './List';

export default class NewsCardList extends List {
    constructor(...props) {
        super(...props);
        this._cardContainerElement = this._element;
    }

    setData(data, onCreate, erase) {
        if (erase) {
            this._cardContainerElement.innerHTML = '';
        }
        this._cardContainerElement.appendChild(onCreate(data));
        this._cardContainerElement.parentNode.classList.remove('hide-block');
    }

}