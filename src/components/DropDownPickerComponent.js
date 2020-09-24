import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'; //https://www.npmjs.com/package/react-native-dropdown-picker https://reactnativeexample.com/a-picker-dropdown-component-for-react-native/ 

const DropDownPickerComponent = ({stockTerm, updateStockTerm}) => {
    return(
        <DropDownPicker
             //styling
             containerStyle={{width: 150, height: 1200}}
             activeLabelStyle={{color: 'green'}}
 
             //styling
            items={[
                {label: 'Amazon', value: 'AMZN'},
                {label: 'Google', value: 'GOOGL'},
                {label: 'Microsoft', value: 'MSFT'},
                {label: 'Facebook', value: 'FB'},
                {label: 'Tesla', value: 'TSLA'},
                {label: 'Apple', value: 'AAPL'},
                {label: 'Nvidia', value: 'NVDA'},
                {label: 'IBM', value: 'IBM'},
            ]}

            searchable={true}
            searchablePlaceholder="Search for an item or scroll through the list"
            searchablePlaceholderTextColor="gray"
            seachableStyle={{}}
            searchableError={() => <Text>Not Found</Text>}

            defaultValue= 'AMZN'
            defaultIndex={0}
            containerStyle={{height: 40}}
            onChangeItem={(item) => {
                updateStockTerm(item.value)
                // console.log(stockTerm)
                // console.log(item.label, item.value)
            }}
           
        />
    )
};

const styles = StyleSheet.create({});

export default DropDownPickerComponent;
