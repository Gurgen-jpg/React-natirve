import {StatusBar} from 'expo-status-bar';
import React, {ChangeEvent, useState} from 'react';
import {
    ActivityIndicator,
    Alert,
    Button,
    StyleSheet,
    Text,
    Image,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {IButton} from "./Button/Button";
import TeslaApp from "./TeslaApp/TeslaApp";

export default function App() {
    const [value, setValue] = useState('')
    return (
        <>

            <TeslaApp/>
           {/*<View style={styles.container}>*/}

            {/*<TouchableOpacity*/}
            {/*    style={styles.button}*/}
            {/*    activeOpacity={0.6}*/}
            {/*>*/}

            {/*    <Text style={styles.buttonText}>Button</Text>*/}
            {/*</TouchableOpacity>*/}
            {/*<IButton/>*/}
            {/*<IButton variant={'error'} activeOpacity={0.2} onPress={()=>Alert.alert('error')}/>*/}
            {/*<ActivityIndicator size="large" color={'#ff0000'}/>*/}
            {/*    <Button*/}
            {/*        title="Press me"*/}
            {/*        color="#f194ff"*/}
            {/*        onPress={() => Alert.alert('Button with adjusted color pressed')}*/}
            {/*    />*/}
            {/*<StatusBar style="auto"/>*/}
            {/*<Image*/}
            {/*    style={{...styles.image, borderWidth: 5, borderColor: 'green'}}*/}
            {/*    source={{uri:'https://i.playground.ru/p/6_HDr3ug2QqewBj6p5A7Vw.jpeg'}}*/}
            {/*/>*/}
            {/*<Text style={{borderWidth: 1}} numberOfLines={4}>*/}
            {/*    In publishing and graphic design,*/}
            {/*    Lorem ipsum is a placeholder text commonly used to demonstrate*/}
            {/*    the visual form of a document or a typeface without relying on meaningful content.*/}
            {/*    Lorem ipsum may be used as a placeholder before final copy is available.*/}
            {/*</Text>*/}
        {/*</View>*/}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 300,
        width: 300,
        borderRadius: 300 / 2
    },
    button: {
        height: 28,
        width: 150,
        backgroundColor: '#71bb71',
        alignItems: "center",
        justifyContent: "center",
        orderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        lineHeight: 26,
        fontWeight: '500'
    }
});
