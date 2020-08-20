import {PRELOADER} from '../constants/PRELOADER';
import {NEWS_CARD_SECTION} from '../constants/NEWS_CARD_SECTION';

export const renderPreloader = function (isLoading) {
    if(isLoading) {
        PRELOADER.classList.remove('hide-block');
        NEWS_CARD_SECTION.classList.add('hide-block');
    } else{
        PRELOADER.classList.add('hide-block');
        NEWS_CARD_SECTION.classList.remove('hide-block');
    }
}