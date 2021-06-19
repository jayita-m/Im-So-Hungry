import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Spoonacular from '../API/Spoonacular';
import RecipeSteps from '../Components/RecipeSteps';

const RecipeScreen = ({ navigation }) => {

    console.disableYellowBox = true; 

    const [results, setResults] = useState([]);

    const recipeItem = navigation.getParam('item');
    const recipeID = recipeItem.id;
    
    console.log(recipeItem);
    console.log("Recipe name is ======== " + recipeItem.title);

    const getDetails = async (recipeID) => {
        const response = await Spoonacular.get(`/${recipeID}/analyzedInstructions`, {
            params: {
                apiKey: 'a8fe8ce8285e474c9fa221feed8de59d',
                id: recipeID,
                stepBreakdown: true
                //ranking: 1
                //ignorePantry: true
            }});
        setResults(response.data);
    };
    useEffect( () => {
        getDetails(recipeID);
    }, []);


    return (
        <View style={{flex: 1}}>
            <ScrollView>
            <Image style={styles.imageStyle} source={{ uri: recipeItem.image }} />
            <Text style={styles.headingStyle}>RECIPE: {recipeItem.title}</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginHorizontal: 15, marginBottom: 10}}/>
            <FlatList
                keyExtractor= {(result) => result.id}
                data={results}
                renderItem= {( {item} ) => {
                    return <RecipeSteps result={item} />
                }}

            />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

    imageStyle: {
        width: 350,
        alignSelf: 'center',
        height: 200,
        borderRadius: 10,
        margin: 5
    },

    headingStyle: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        fontWeight: 'bold',
        fontSize: 24
    },

});

export default RecipeScreen;