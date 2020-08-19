import "../../pages/analytics.css";

import DataStorage from '../modules/DataStorage';
import Statistics from '../components/Statistics';

import {toGetDateDaysAgo} from "../utils/toGetDateDaysAgo";
import {toGetDateToAnalytics} from "../utils/toGetDateToAnalytics";

import {ANALYTICS_PER_DAYS_UNIT_TEMPLATE} from '../constants/ANALYTICS_PER_DAYS_UNIT_TEMPLATE';
import {ANALYTICS_LIST} from '../constants/ANALYTICS_LIST';

const dataStorage = new DataStorage();
const userRequest = dataStorage.getLocalStorage('userRequest');
const currentLocalStorage = dataStorage.getLocalStorage('newsData');
const statistics = new Statistics(currentLocalStorage, userRequest, toGetDateDaysAgo, ANALYTICS_PER_DAYS_UNIT_TEMPLATE, ANALYTICS_LIST, toGetDateToAnalytics);
statistics.getStatistic();




