import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 

const StartScreen = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback 
            onPress ={() => {
                    navigation.navigate('Ingredients');
                }}
        >
        <View style={styles.viewStyle}>
            <Text style={styles.nameStyle}>I'M SO{"\n"}HUNGRY</Text>
            <MaterialCommunityIcons name="food-drumstick" style={styles.iconStyle} />
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({

    nameStyle: {
        fontWeight: 'bold',
        textAlign: "center",
        alignSelf: "center",
        fontSize: 68,
        padding: 8,
        color: '#EEEBDD'
    },

    iconStyle: {
        fontSize: 70,
        textAlign: 'center',
        alignSelf: 'center',
        color: "#EEEBDD",
        textAlign: 'center',
        textAlignVertical: 'center'

    },

    viewStyle: {
        backgroundColor: '#CB997C',
        justifyContent: 'center',
        flex: 1
    }

});

export default StartScreen;