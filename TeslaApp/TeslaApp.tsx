import React from 'react';
import {StyleSheet,View} from "react-native";
import {StatusBar} from "expo-status-bar";
import CarItem from "./components/CarItem/CarItem";




export default function TeslaApp(){
    return (
        <View style={styles.container}>
            <CarItem/>


            <StatusBar style="auto"/>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5b9b9',
        alignItems: 'center',
        justifyContent: 'center',
    },

})
