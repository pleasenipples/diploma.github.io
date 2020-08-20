export default class Statistics {
    constructor(currentLocalStorage, userRequest, daysAgoCallback, analyticTemplate, analyticList, dateForAnalytics) {
        this._localStorageData = currentLocalStorage;
        this.userRequest = userRequest;
        this._daysAgoCallback = daysAgoCallback;
        this.analyticList = analyticList;
        this._dateForAnalytics = dateForAnalytics;
        this.userRequestTitle = document.querySelector('.query__title');
        this.newsForWeek = document.querySelector('#news-for-week');
        this.newsForHeaders = document.querySelector('#news-for-headers');
        this.analyticTemplate = analyticTemplate;
    }

    _showUserRequest() {
        this.userRequestTitle.textContent = `Вы спросили: «${this.userRequest}»`;
    }

    _showNewsForWeek() {
        this.newsForWeek.textContent = this._localStorageData.length;
    }

    _showCountNewsInHeaders (data) {
        this.newsForHeaders.textContent = this._getCountNewsInHeaders(data);
    }

    _getCountNewsInHeaders (data) {
        return data.reduce((counter, newsData) => {
            if (newsData.title.toLowerCase().indexOf(this.userRequest.toLowerCase()) !== -1) {
                counter ++;
            }
            return counter;
        }, 0);
    }

    _getCountNewsInDescription (data) {
        return data.reduce((counter, newsData) => {
            if (newsData.description !== null && newsData.description.toLowerCase().indexOf(this.userRequest.toLowerCase()) !== -1) {
                counter++;
            }
            return counter;
        }, 0);
    }

    _getFullCount(data) {
        return this._getCountNewsInHeaders(data) + this._getCountNewsInDescription(data);
    }

    _getDataDay(daysAgo) {
        const newsForDay = this._localStorageData.filter((newsData) => {
            return newsData.publishedAt.substr(0, 10) === this._daysAgoCallback(daysAgo).substr(0, 10);
        })
        return newsForDay;
    }

    _getAnalyticUnit(daysAgo) {
        const mention = this._getFullCount(this._getDataDay(daysAgo));
        this.newAnalyticUnit = this.analyticTemplate.cloneNode(true);
        this.newAnalyticUnit.querySelector('.analytics-per-days__unit-quantity').style.width = `${mention}%`;
        this.newAnalyticUnit.querySelector('.analytics-per-days__unit-date').textContent = this._dateForAnalytics(this._daysAgoCallback(daysAgo));
        if (mention !== 0) {
            this.newAnalyticUnit.querySelector('.analytics-per-days__unit-quantity-num').textContent = `${mention}`;
        } else {
            this.newAnalyticUnit.querySelector('.analytics-per-days__unit-quantity-num').textContent = `${mention}`;
            this.newAnalyticUnit.querySelector('.analytics-per-days__unit-quantity-num').style.color = 'black';
        }
        return this.newAnalyticUnit;
    }

    _setAnalyticItems() {
        for(let i = 6; i >= 0; i--) {
            this.analyticList.appendChild(this._getAnalyticUnit(i));
        }
    }

    getStatistic() {
        this._showUserRequest();
        this._showNewsForWeek();
        this._showCountNewsInHeaders(this._localStorageData);
        this._setAnalyticItems();
    }
}