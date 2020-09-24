import axios from 'axios';

export default axios.create({
    //1.) https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo (example)
    //2.) https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo (example)
    //They both share a baseURL that we will save.
    baseURL: 'https://www.alphavantage.co/query?',
    //Now if we call 'yelp.get('/search')', the call will be preconfigured with the baseURL we don't have to retype it.
    // headers: {
    //     //Authorization takes 'Bearer ' + the API key.
    //     Authorization: 'Bearer VVJ6SF19T0KCMPEW'
    // }
});