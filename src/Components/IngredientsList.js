import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, } from 'react-native';

const IngredientsList = ({ IngredientsToShow }) => {

    return (
        <View>
            <FlatList
                keyExtractor = { item => item }
                data = {IngredientsToShow}
                renderItem = {({item}) => {
                    return (
                        <View style={styles.background}>
                            <Text style={styles.textStyle}>{item}</Text>
                        </View>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    background: {
        backgroundColor: "#B7B7A4",
        borderRadius: 7,
        marginHorizontal: 15,
        height: 40,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5
    },

    textStyle: {
        marginLeft: 15,
        fontSize: 18,
        alignSelf: 'center',
        textAlignVertical: 'center',
        textTransform: 'capitalize',
        color: "#F0EFEB",
        fontWeight: 'bold'
    }

});

export default IngredientsList;