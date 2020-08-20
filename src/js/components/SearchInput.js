export default class SearchInput {
    constructor(submitFormCallback, form, errorMessage) {
        this._submitFormCallback = submitFormCallback || (() => {});
        this.form = form;
        this.errorMessage = errorMessage;
        this.submitButton = this.form.querySelector('#submit-button');
        this.errorSpan = this.form.elements.query.nextElementSibling;
        this.userQuery = this.form.elements.query;
    }

    _checkInputValidity() {
        if (this.userQuery.validity.valueMissing) {
            this.errorSpan.textContent = this.errorMessage.valueMissing;
            this._activateError(this.errorSpan);
            return false;
        }
        this._resetError(this.errorSpan);
        return true;
    }

    _activateError(element) {
        element.classList.add('error-message__visible');
    }

    _resetError(element) {
        element.classList.remove('error-message__visible');
        element.previousElementSibling.textContent = '';
    }

    _setSubmitButtonDisabled(element) {
            element.disabled = true;
        }

    _setSubmitButtonEnabled(element) {
            element.disabled = false;
    }

    getResultUserSearch() {
        if (this._checkInputValidity()) {
            this._setSubmitButtonEnabled(this.submitButton);
            let userSearchRequest = this.form.elements.query.value;
            return this._submitFormCallback(userSearchRequest);
        } else {
            //this._setSubmitButtonDisabled(this.submitButton);
        }
    }
}