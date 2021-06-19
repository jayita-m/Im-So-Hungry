import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import IngredientsList from '../Components/IngredientsList';
import useResults from '../Hooks/useResults';


const IngredientsScreen = ({ navigation }) => {

    const [term, setTerm] = useState([]);
    const [name, setName] = useState("");
    const[searchApi, results, errorMessage] = useResults();

    return (
        <View style={styles.megabgStyle}>
            <View style={styles.background}>
                <AntDesign name="pluscircle" style={styles.iconStyle} />
                <TextInput 
                    clearButtonMode="always"
                    placeholder="Add an ingredient"
                    style={styles.inputStyle}
                    autoCapitalize= "none"
                    value={name}
                    onChangeText={(newName) => {setName(newName)}}
                    onEndEditing = { () => { 
                        setTerm([...term, name]);
                    }}
                />
            </View>

            <View style={{flex: 1}}>
            <IngredientsList
                IngredientsToShow = {term}
            />
            </View>
            <View>
            <TouchableOpacity
                onPress ={() => {
                    searchApi(term);
                    navigation.navigate('Foods', {results: results});
                }}

                style={styles.touchableStyle}
            >
                <View style={styles.buttonStyle}>
                <Text style={styles.buttonText}> FIND RECIPES! </Text>
                </View>
            </TouchableOpacity>

            </View>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({

    megabgStyle: {
        backgroundColor: '#FFF1E6',
        flex: 1
    },

    buttonText: {
        color: "#FFFFFF",
        fontWeight: 'bold',
        flex: 1,
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center'
    },

    buttonStyle: {
        backgroundColor: "#CB997E",
        borderRadius: 5,
        marginHorizontal: 15,
        height: 50,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 20
    },

    background: {
        backgroundColor: "#EDDCD2",
        borderRadius: 5,
        marginHorizontal: 15,
        height: 50,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10
    },

    inputStyle: {
        flex: 1,
        fontSize: 18,
        color: "#484848"
    },

    iconStyle: {
        fontSize: 35,
        color: '#CB997E',
        alignSelf: 'center',
        marginHorizontal: 10        
    }

});

export default IngredientsScreen;