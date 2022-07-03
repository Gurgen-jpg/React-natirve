import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";

type ColorType = "primary" | "secondary"
type StyledButtonType = {
    color: ColorType
    context: string
    onPress: () => void
}

export default function StyledButton({color, context, onPress}: StyledButtonType) {
    //подборка цвета через пропсы
    const bgColor = color === "primary" ? "black" : "white";
    const txtColor = color === "primary" ? "white" : "black";

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[{backgroundColor: bgColor}, styles.button]}
                onPress={onPress}
            >
                <Text style={[{color: txtColor}, styles.text]}>{context}</Text>
            </TouchableOpacity>
        </View>
    );
};

