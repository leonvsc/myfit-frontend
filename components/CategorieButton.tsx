import {TouchableOpacity, Text, Image, GestureResponderEvent, ImageSourcePropType} from "react-native";
import React from "react";
import {opacity} from "react-native-reanimated/lib/typescript/reanimated2/Colors";


// @ts-ignore
const CategorieButton = ({title, handlePress, containerStyles, textStyles, isLoading, icon}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-gray-300 rounded-xl min-h-[62px] items-center justify-center m-2 p-5 ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            <Image
                source={icon}
                resizeMode="contain"
                className="w-10 h-10"/>
            <Text className={`text-black font-psemibold text-lg ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}
export default CategorieButton;