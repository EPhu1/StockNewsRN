import React, {useState} from 'react';
import { FlatList, Linking, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// import {getNews} from '../functions/getNews'; 
import queryNewsData from '../hooks/queryNewsData';

//I had the searchAPI and newsData get called here. It should instead be called in the parent most component. My b. Hooks should be in the most parent component.

const NewsComponent = ({stockTerm, searchNewsAPI, myNewsData}) => {
    // let [searchNewsAPI, myNewsData] = queryNewsData({stockTerm});
    console.log('x')
    var DATA = myNewsData;
    if(DATA.length == 0){
        return <Text>Yikes</Text>
    }
    return(
        <View>
            <Text style = {styles.titleStyle}>Relevant News to {stockTerm}:</Text>
            <FlatList 
                contentContainerStyle={{ paddingBottom: 20}}
                data = {DATA.data.articles}
                keyExtractor={datum => datum.title}
                renderItem = {({item}) => {
                    return(
                        <View style = {styles.newsArticleStyle}>
                            <TouchableOpacity style = {{ flexDirection: 'row'}} onPress = {() => Linking.openURL(item.url)}> 
                                <Image style = {styles.imageStyle} source = {{uri : item.urlToImage}}/> 
                                <Text style = {styles.textStyle}>{item.title}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 15
    },
    newsArticleStyle: {
        borderWidth: 1
    },
    imageStyle: {
        marginVertical: 3,
        width: 65,
        height: 65,
        borderRadius: 4,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black'
    },
    textStyle: {
        flex: 1, 
        flexWrap: 'wrap',
        fontSize: 13,
        marginLeft: 5
    }
});

export default NewsComponent;
