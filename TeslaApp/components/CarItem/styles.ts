import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width:'100%',
        height:'100%',
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: "center",
        zIndex: 100,

    },
    title: {
        fontSize: 40,
        fontWeight: '500',

    },
    subTitle: {
        fontSize: 16,
        color:'#5c5e62',
    },
    subTitleCTA: {
        textDecorationLine: "underline",

    },
    image: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        resizeMode: "cover",
        position: "absolute",
    },
    buttonContainer: {
        position: "absolute",
        zIndex: 100,
        width: '100%',
        bottom: 50,
    }
})
export default styles;