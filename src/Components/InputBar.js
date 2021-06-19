import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { rosybrown } from 'color-name';

const InputBar = ({term, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <AntDesign name="search1" style={styles.iconStyle} />
            <TextInput 
                placeholder="Add an ingredient"
                style={styles.inputStyle}
                autoCapitalize= "none"
                value={term}
                //onEndEditing={() => onTermSubmit() }
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    background: {
        backgroundColor: "#F0EEEE",
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
        alignSelf: 'center',
        marginHorizontal: 10        
    }

});

export default InputBar;