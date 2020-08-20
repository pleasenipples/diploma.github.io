import {toGetDateDaysAgo} from "../utils/toGetDateDaysAgo";
import {getNowDate} from "../utils/getNowDate";

// export const NEWS_API_ARGUMENTS = {
//     address: 'https://newsapi.org/v2/everything?pageSize=100&sortBy=publishedAt',
//     apiKey: `2a025fc20b174109ae4d8efe6dfe99d2`,
//     from: `${toGetDateDaysAgo(7)}`,
//     to: `${getNowDate()}`
// };

export const NEWS_API_ARGUMENTS = {
    address: 'https://nomoreparties.co/news/v2/everything?pageSize=100&sortBy=publishedAt',
    apiKey: `2a025fc20b174109ae4d8efe6dfe99d2`,
    from: `${toGetDateDaysAgo(7)}`,
    to: `${getNowDate()}`
};