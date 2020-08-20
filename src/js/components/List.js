export default class List {
    constructor({selector, handlers = [] }) {
        this._element = document.querySelector(selector) || document.createElement('div');
    }
}