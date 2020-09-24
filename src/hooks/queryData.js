import React, {useState, useEffect} from 'react';
import alphaVantage from '../api/alphaVantage'; 

export default ({stockTerm}) => {
    const [results, setResults] = useState([]); //used for api search results
    const [errorMessage, setErrorMessage] = useState(''); //used for handling error messages
    //searchAPI will take some term called termArgument
    const searchAPI = async (stockTerm) => { //async allows us to call await, which waits for the api to retrieve data and save it to response variable.
        try{
            const response = await alphaVantage.get('./', {
                params: { //this is how we select the parameters/query strings on the API website.
                    function: 'TIME_SERIES_INTRADAY',
                    symbol: stockTerm,
                    interval: '60min',
                    apikey: 'VVJ6SF19T0KCMPEW'
                }
            });
            setResults(response); //response.data is the entire JSON
        }
        catch (err){ //if we run into an error
            setErrorMessage('Something went wrong');
        }
    };

    useEffect(() => {searchAPI(stockTerm);}, []); 

    var myData = [];
    if(results.length != 0){ 
        var keys = Object.keys(results.data); //["Meta Data", "Time Series (5min)]"
        var i = 101;
        for(var key in results.data['Time Series (60min)']){
            // console.log(key + ': $' + results.data['Time Series (5min)'][key]['1. open']);
            
            i--;
            myData.push({x: i, date: key, price: parseFloat(results.data['Time Series (60min)'][key]['1. open'])}) //IMPORTANT: I HAD TO USE parseInt() TO CHANGE STRING TO INT
        }
    }

    return [searchAPI, myData, errorMessage]
};

