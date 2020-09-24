//look at bottom for notes.
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import DropDownPickerComponent from '../components/DropDownPickerComponent'

const HomeScreen = () => {
    const [stockTerm, setStockTerm] = useState('no val');

    return(
        <View>
            <Button title = 'submit' onPress = {() => console.log(stockTerm)}/>
            <DropDownPickerComponent stockTerm = {stockTerm} updateStockTerm = {(newStockTerm) => {setStockTerm(newStockTerm)}} />
        </View>
    )
}


const styles = StyleSheet.create({});

export default HomeScreen;
