import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const FoodCard = ({ result }) => {

    const missingArray = result.missedIngredients;


    return (
        <View style={styles.cardStyle}>
            <Image style={styles.imageStyle} source={{ uri: result.image }} />
            <Text style={styles.headingStyle}>{result.title}</Text>

            <Text style={styles.availStyle}>You have {result.usedIngredientCount} of {result.usedIngredientCount+result.missedIngredientCount} ingredients available!</Text>
            
            <Text style={styles.ingreStyle}>Missing</Text>
            <FlatList
                keyExtractor = {item => item.original}
                data = {missingArray}
                renderItem = {({item}) => {
                    return (
                            <Text style={styles.missingStyle}>- {item.original}</Text>
                    )
                }}

            />

            <Text style={styles.likeStyle}>Likes recieved: {result.likes}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    cardStyle: {
        borderStyle: 'solid',
        borderRadius: 10,
        //borderWidth: 5,
        //borderColor: "#B7B7A4",
        borderColor: "#A5A58D",
        marginVertical: 15,
        marginHorizontal: 11,
        width: 315,
        height: 480,
        backgroundColor: "#FFFFFF",



        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    },

    headingStyle: {
        marginVertical: 5,
        fontWeight: 'bold',
        fontSize: 24,
        textTransform: 'uppercase',
        alignSelf: 'center',
        textAlign: 'center'
    },

    imageStyle: {
        width: 290,
        alignSelf: 'center',
        height: 200,
        borderRadius: 10,
        margin: 5
    },

    availStyle: {
        textAlign: 'center',
        color: "#B6C867"
    },

    likeStyle: {
        backgroundColor: "#DDBEA9",
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        height: 23
    },

    ingreStyle: {
        marginTop: 20,
        marginBottom: 5,
        textAlign: 'center',
        backgroundColor: '#B7B7A4'
    },

    missingStyle: {
        marginBottom: 2,
        marginLeft: 15
    }

});

export default FoodCard;