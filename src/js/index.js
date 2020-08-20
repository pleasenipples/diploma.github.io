import "../pages/main.css";
import NewsApi from './modules/NewsApi';
import DataStorage from './modules/DataStorage';
import NewsCard from './components/NewsCard';
import NewsCardList from './components/NewsCardList';
import SearchInput from './components/SearchInput';

import {NEWS_CARD_TEMPLATE} from './constants/NEWS_CARD_TEMPLATE';
import {NOT_FOUND_BLOCK} from './constants/NOT_FOUND_BLOCK';
import {FORM_INPUT_SEARCH} from './constants/FORM_INPUT_SEARCH';
import {CARD_LIST_SELECTOR} from './constants/CARD_LIST_SELECTOR';
import {ERROR_MESSAGE} from './constants/ERROR_MESSAGE';
import {NEWS_CARD_SECTION} from './constants/NEWS_CARD_SECTION';
import {NEWS_API_ARGUMENTS} from './constants/NEWS_API_ARGUMENTS';
import {BUTTON_LOAD_MORE} from './constants/BUTTON_LOAD_MORE';

import {toConvertDate} from './utils/toConvertDate';
import {renderPreloader} from './utils/renderPreloader';

const createCardListFragment = (data) => {
    const sliceData = data.splice(0, 3);
    let fragment = document.createDocumentFragment();
    sliceData.forEach((cardData) => {
        const card = new NewsCard(cardData, NEWS_CARD_TEMPLATE, toConvertDate);
        fragment.appendChild(card.getNewsCard());
    })
    if(data.length === 0) {
        BUTTON_LOAD_MORE.removeEventListener('click', (event) => {
            newsCardList.setData(newsData, createCardListFragment)
        });
        BUTTON_LOAD_MORE.parentElement.classList.add('hide-block');
    }
    return fragment;
}

const submitCallback = function (userRequest) {
    const dataStorage = new DataStorage();
    dataStorage.setLocalStorage('userRequest' ,userRequest);
    const newsApi = new NewsApi(NEWS_API_ARGUMENTS, userRequest, renderPreloader);
    newsApi.getNews()
        .then((data) => {
            dataStorage.setLocalStorage('newsData', data.articles);
            const newsData = dataStorage.getLocalStorage('newsData');
            if (newsData.length === 0) {
                NOT_FOUND_BLOCK.classList.remove('hide-block');
                NEWS_CARD_SECTION.classList.add('hide-block');
            } else {
                const newsCardList = new NewsCardList(CARD_LIST_SELECTOR);
                newsCardList.setData(newsData, createCardListFragment, true);
                BUTTON_LOAD_MORE.addEventListener('click', (event) => {
                    newsCardList.setData(newsData, createCardListFragment)
                })
            }
        });
}

FORM_INPUT_SEARCH.addEventListener('submit', (event) => {
    event.preventDefault();
    NOT_FOUND_BLOCK.classList.add('hide-block');
    BUTTON_LOAD_MORE.parentElement.classList.remove('hide-block');
    const searchInput = new SearchInput(submitCallback, FORM_INPUT_SEARCH, ERROR_MESSAGE);
    searchInput.getResultUserSearch();
})