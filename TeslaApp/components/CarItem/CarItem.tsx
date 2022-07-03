import React from 'react';
import {ImageBackground, Text, View} from "react-native";
import {backgrounds} from "../../assets/images/backgrounds";
import styles from "./styles";
import StyledButton from "../Button/StyledButton";

export type CarItemPropsType = {
    name: string
    tagline: string
    image: any //NodeRequire
    taglineCTA?: string
}
export default function  CarItem({name, tagline, image, taglineCTA}:CarItemPropsType) {
    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{tagline}{' '}
                    <Text style={styles.subTitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton color={"primary"} context={"custom order"} onPress={() => {
                }}/>
                <StyledButton color={"secondary"} context={"existing inventory"} onPress={() => {
                }}/>
            </View>
        </View>
    );
};

