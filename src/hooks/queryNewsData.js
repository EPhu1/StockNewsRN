import {useState, useEffect} from 'react';
import news from '../api/news'; 

export default ({stockTerm}) => {
    const [newsResults, setNewsResults] = useState([]);
    //searchAPI will take some term called termArgument
    const searchNewsAPI = async (stockTerm) => {
        const response = await news.get('./', {
            params: { 
                qInTitle: `${stockTerm}`,
                sortBy: 'relevancy',
                apikey: '8957e2c67f6e4bab8188f03686a1fd4c',
                language: 'en',
                pageSize: 20
            }
        });
        setNewsResults(response);
        // console.log(newsResults)
    };

    useEffect(() => {searchNewsAPI(stockTerm);}, []); 

    var myNewsData = [];
    myNewsData = newsResults;
    // console.log(myNewsData)
    return [searchNewsAPI, myNewsData]
};

