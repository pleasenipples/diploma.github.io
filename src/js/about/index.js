import "../../pages/about.css";
import {mySwiper} from '../components/slider';
import GithubApi from '../modules/GithubApi';
import DataStorage from '../modules/DataStorage';
import CommitsCardList from '../components/CommitsCardList';
import CommitCard from "../components/CommitCard";
import {toConvertDate} from "../utils/toConvertDate";

import {COMMIT_LIST_SELECTOR} from '../constants/COMMIT_LIST_SELECTOR';
import {COMMIT_CARD_TEMPLATE} from '../constants/COMMIT_CARD_TEMPLATE';
import {GITHUB_API_ARGUMENTS} from '../constants/GITHUB_API_ARGUMENTS';

const githubApi = new GithubApi(GITHUB_API_ARGUMENTS);

const createCommitsListFragment = (data) => {
    return data.reduce((fragment, cardData) => {
        const card = new CommitCard(cardData, COMMIT_CARD_TEMPLATE, toConvertDate);
        fragment.appendChild(card.getCommitCard());
        return fragment;
    }, document.createDocumentFragment());
}

githubApi.getCommits()
    .then((data) => {
        const dataStorage = new DataStorage();
        dataStorage.setLocalStorage('commitData', data);
        const githubData = dataStorage.getLocalStorage('commitData');
        const commitsCardList = new CommitsCardList(COMMIT_LIST_SELECTOR);
        commitsCardList.setCommitData(githubData, createCommitsListFragment);
        mySwiper.init();
    });

