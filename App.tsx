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
    TouchableOpacity, ListRenderItem, FlatList, Keyboard, TouchableWithoutFeedback
} from 'react-native';
import Icon1 from "./icons/Icon1";
import Icon2 from "./icons/Icon2";
import Icon3 from "./icons/Icon3";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export default function App() {
    const [value, setValue] = useState('')


    const [tasks, setTask] = useState<TaskType[]>([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'REACT', isDone: true},
        {id: 3, title: 'CSS', isDone: true},
        {id: 4, title: 'JS', isDone: false},
    ])
    const changeStatus = (id: number) => {
        setTask(tasks.map((el) => el.id === id ? {...el, isDone: !el.isDone} : {...el}))
    }
    const Left = () => {
        return <View><Text>LEFT</Text></View>
    }
    const Right = () => {
        return <View><Text>RIGHT</Text></View>
    }


    const render: ListRenderItem<TaskType> = ({item, index}) => {

        return <Swipeable renderLeftActions={Left} renderRightActions={Right}>
            <TouchableWithoutFeedback
                onLongPress={() => changeStatus(item.id)}>
                <View
                    style={{
                        borderWidth: item.isDone ? 4 : 1,
                        borderColor: item.isDone ? '#86b773' : 'pink',
                        opacity: item.isDone ? 0.4 : 1,
                        marginVertical: 5,
                        borderRadius: 6,
                        alignItems: "center"
                    }}
                >
                    <Text style={{fontSize: 24, fontWeight: "500", paddingVertical: 10}}>{item.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        </Swipeable>
    }

    const addTasks = () => {
        const newTask: TaskType = {
            id: tasks.length + 1,
            title: value,
            isDone: false
        }
        setTask([newTask, ...tasks])
        setValue('')
        Keyboard.dismiss()
    }

    return (
        <GestureHandlerRootView style={{flex: 1}}>

        <View style={styles.container}>
                <View style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Icon1/>
                    <TextInput style={{width: 200, height: 28, borderWidth: 1, borderRadius: 3}}
                               value={value}
                               onChangeText={setValue}
                    />
                    <TouchableOpacity onPress={() => addTasks()}>
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>
                <Text>{value}</Text>
                <View style={{width: "100%"}}>
                    <FlatList<TaskType>
                        data={tasks} renderItem={render}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
                <Icon2/>
                <Icon3/>
                <StatusBar style='auto'/>
            </View>

            {/*<TeslaApp/>*/}
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
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 20,
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
