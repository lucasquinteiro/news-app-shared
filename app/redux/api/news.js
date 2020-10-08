import axios from 'axios';
import sampleData from '../../sampleData';
const API_KEY = '9d4de1e155104efe89f8809858c69b64';

export const getLatestNews = () => {
  const url = `http://newsapi.org/v2/everything?q=messi&language=ensortBy=publishedAt&apiKey=${API_KEY}`;
  return axios.get(url).then((res) => {
    // return res.data.articles;
    return sampleData;
  });
};
