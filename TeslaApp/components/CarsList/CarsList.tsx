import React from "react"
import {Dimensions, FlatList, ListRenderItem, View} from "react-native";
import cars from "./cars";
import CarItem, {CarItemPropsType} from "../CarItem/CarItem";
import styles from "./styles";

export default function CarsList() {

    const render: ListRenderItem<CarItemPropsType> = ({item, index}) => {
        return (
            <CarItem
                key={ index }
                name={item.name}
                     tagline={item.tagline}
                     image={item.image}
                     taglineCTA={item.taglineCTA}
            />
        )
    }
    return (
        <View style={styles.container}>
            <FlatList<CarItemPropsType>
                data={cars}
                renderItem={render}
                showsHorizontalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={"normal"}
                snapToInterval={Dimensions.get("screen").height}

            />
        </View>
    )
}