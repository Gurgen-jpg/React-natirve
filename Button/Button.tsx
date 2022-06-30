import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View} from "react-native";

type V =  'default' | 'error' | 'primary'
type IButtonPropsType = {
    variant?: V
}



const colors: { [Key in V]: string } = {
    primary: '#7767f8',
    error: '#ee1d1d',
    default: '#4659b7',
}

export const IButton = ({variant, ...restProps}: IButtonPropsType & TouchableOpacityProps) => {
    return (
            <>
                <TouchableOpacity
                    {...restProps}
                    style={[styles.button, {backgroundColor: 'red'}]}
                >

                    <Text style={styles.buttonText}>Button</Text>
                </TouchableOpacity>
            </>
        )
    }



const styles = StyleSheet.create({
    button: {
        marginVertical: 6,
        height: 28,
        width: 150,
        backgroundColor: '#71bb71',
        alignItems: "center",
        justifyContent: "center",
        orderRadius: 5
    },
    error: {
        backgroundColor: 'red'
    },
    default: {
        backgroundColor: '#7767f8'
    },
    primary: {
        backgroundColor: '#1d07e8'
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        lineHeight: 26,
        fontWeight: '500'
    }
});
