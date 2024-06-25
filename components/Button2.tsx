import {TouchableOpacity, Text} from "react-native";
import React from "react";

// TODO: Add type for props

// @ts-ignore
const Button2 = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-black rounded-xl min-h-[30px] items-center justify-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
    disabled={isLoading}
    >
    <Text className={`text-white font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
)
}

export default Button2;