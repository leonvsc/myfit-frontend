import {TouchableOpacity, Text, Image, GestureResponderEvent, ImageSourcePropType} from "react-native";
import React from "react";
import {opacity} from "react-native-reanimated/lib/typescript/reanimated2/Colors";

// TODO: Add type for props

// @ts-ignore
const ExerciseDetailsButton = ({title, number, handlePress, containerStyles, textStyles, isLoading, icon}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-gray-300 rounded-xl min-h-[62px] items-center justify-center m-2 p-5 ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            <Text className="text-black font-pmedium text-lg">{number}</Text>
            <Text className={`text-black font-psemibold text-lg ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}
export default ExerciseDetailsButton;