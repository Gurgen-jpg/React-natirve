import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function TeslaApp(){
    return (
        <View style={styles.container}>
            <View style={styles.carContainer}>
                <ImageBackground
                    source={require('assets/images/ModelX.jpeg')}
                    style={styles.image}
                />
                <View style={styles.titles}>
                    <Text style={styles.title}>Model S</Text>
                    <Text style={styles.subTitle}>Starting at $69,420</Text>
                </View>
            </View>

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
    carContainer: {
        width:'100%',
        height:'100%',

    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: "center",
    },
    title: {
        fontSize: 40,
        fontWeight: '500',
    },
    subTitle: {
        fontSize: 16,
        color:'#5c5e62',
    },
    image: {
        width: '100%',
        height: '100%',
    }
})
