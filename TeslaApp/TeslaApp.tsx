import React from 'react';
import {StyleSheet,View} from "react-native";
import {StatusBar} from "expo-status-bar";
import CarItem from "./components/CarItem/CarItem";
import {backgrounds} from "./assets/images/backgrounds";



export default function TeslaApp(){
    return (
        <View style={styles.container}>
            <CarItem name={"Modal S"}
                     tagline={"Order Delivery for"}
                     image={backgrounds.modelS}
                     taglineCTA={"Touchless Delivery"}

            />


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
