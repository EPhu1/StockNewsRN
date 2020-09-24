//This is how we make functions and call them.
//NOTE: WE MUST IMPORT THE SPECIFIC FUNCTION LIKE SO: 'import { foo } from '../functions/getNews';' 
//NOTE: WE ALSO MUST USE () when calling the function.

import {useState, useEffect} from 'react';
import news from '../api/news'; 

export const foo = () => { 
    return 'foo';
};

export const getNews = (stockTerm) => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    var myData = [];
    const searchAPI2 = async () => {
        try{
            const response = await news.get('./', {
                params: { 
                    qInTitle: `${stockTerm}`,
                    sortBy: 'relevancy',
                    apikey: '8957e2c67f6e4bab8188f03686a1fd4c',
                    language: 'en',
                    pageSize: 4
                }
            });
            setResults(response);
        }
        catch (err){ //if we run into an error
            setErrorMessage('Something went wrong');
        }
    };

    // searchAPI();
    useEffect(() => {searchAPI2();}, []); 
    console.log('x')
    myData = results;
    return {myData, searchAPI2};
};

