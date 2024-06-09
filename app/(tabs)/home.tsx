import {View, Text, Image} from "react-native";
import React from "react";

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
            <Image
                source={require("../../assets/icons/house.png")}
                className="w-6 h-6"/>
        </View>
    )
}

export default Home;