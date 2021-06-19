import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import FoodCard from '../Components/FoodCard';

const FoodScreen = ({ navigation }) => {
    const foodslist = navigation.getParam('results');

    useEffect( () => {
        
    });
    
    return (
        <View style={styles.metaStyle}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={foodslist}
                keyExtractor={(foodslist) => foodslist.title}
                renderItem={( {item} ) => {
                    return (
                    <TouchableOpacity onPress={ () => navigation.navigate('Recipe', { item: item})} >
                    <FoodCard result={item} />
                    </TouchableOpacity>
                    )
                }}
                navigation={navigation}
            />
            <Text style={styles.dirStyle}>Tap a Food Card to see its recipe!</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    dirStyle: {
        textAlign: 'center',
        marginBottom: 50,
        fontSize: 20
    },

    metaStyle: {
        backgroundColor: "#FFF1E6",
        flex: 1
    }

});

export default FoodScreen;