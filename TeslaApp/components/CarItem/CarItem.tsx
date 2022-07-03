import React from 'react';
import {ImageBackground, Text, View} from "react-native";
import {backgrounds} from "../../assets/images/backgrounds";
import styles from "./styles";
import StyledButton from "../Button/StyledButton";


export default function  CarItem() {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={backgrounds.modelX}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subTitle}>Starting at $69,420</Text>
            </View>
            <StyledButton color={"primary"} context={"custom order"} onPress={()=>{}}/>
            <StyledButton color={"secondary"} context={"existing inventory"} onPress={()=>{}}/>
        </View>
    );
};

