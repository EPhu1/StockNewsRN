//look at bottom for notes.
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryVoronoiContainer, VictoryLine, VictoryChart, VictoryAxis } from "victory-native";
import queryData from '../hooks/queryData';
import NewsComponent from '../components/NewsComponent';
import DropDownPickerComponent from '../components/DropDownPickerComponent'
import queryNewsData from '../hooks/queryNewsData';

const StatisticsScreen = () => {
    const convertToDate = (date) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July,', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        let output = '';
        output += months[parseInt(date.slice(5,7)) - 1];
        output += ' ';
        output += parseInt(date.slice(8,10));
        return output;
        // console.log((myData[99].date.slice(5,7)))
        // console.log((myData[99].date.slice(8,10)))
    }

    let [stockTerm, setStockTerm] = useState('AMZN');
    let [searchAPI, myData, errorMessage] = queryData({stockTerm});
    let [searchNewsAPI, myNewsData] = queryNewsData({stockTerm});
    // console.log(parseInt((myData[99].date.slice(8,10))))

    if(myData.length == 0) return(
        //Note: my alphaVantage is limited to 5 calls a minute, so it may freeze here if we select too many stocks at a time.
        <Text>Generating graph...</Text>
    );

    return(
        <View style = {styles.chartStyle}>
            <DropDownPickerComponent stockTerm = {stockTerm} updateStockTerm = {(newStockTerm) => {
                setStockTerm(newStockTerm)
                searchAPI(newStockTerm)
                searchNewsAPI(newStockTerm)
            }} />
            <VictoryChart 
                domainPadding = {5} 
                containerComponent = {<VictoryVoronoiContainer 
                    // mouseFollowTooltips
                    labels={({ datum }) => `${datum.date}: $${datum.price}`}
                />
                }
            >
                <VictoryLine
                    style={{ data: { stroke: "blue", strokeWidth: 2 } }}
                    data = {myData}
                    // NOTE: x and y had to be ints/floats otherwise the tickValues got messed up.
                    x = 'x' //these are what determines the actual graph line itself
                    y = 'price' //these are what determines the actual graph line itself
                />
                <VictoryAxis
                    
                    tickValues={[1, 50, 100]} //position
                    tickFormat={[convertToDate(myData[99].date), convertToDate(myData[49].date), convertToDate(myData[0].date)]} //horizontalAxisLabel
                    // tickFormat={(x) => ('h')}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`$${x}`)}
                />

            </VictoryChart>
            <View style = {{flex: 1}}>
                <NewsComponent stockTerm = {stockTerm} searchNewsAPI = {(term) => searchNewsAPI(term)}myNewsData = {myNewsData}/>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    chartStyle: {
        borderWidth: 1,
        borderColor: 'green',
        flex: 1
    }
});

export default StatisticsScreen;
