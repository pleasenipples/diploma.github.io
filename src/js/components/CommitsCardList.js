import List from './List';

export default class CommitsCardList extends List {
    constructor(...props) {
        super(...props);
        this._cardContainerElement = this._element;
    }

    setCommitData(data, onCreate) {
        this._cardContainerElement.appendChild(onCreate(data));
    }
}