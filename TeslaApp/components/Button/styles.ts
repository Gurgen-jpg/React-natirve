import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        zIndex: 100,
    },
    button: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40/2,
    },
    text: {
        fontSize: 12,
        fontWeight: "500",
        textTransform: "uppercase",
    },
})

export default styles;