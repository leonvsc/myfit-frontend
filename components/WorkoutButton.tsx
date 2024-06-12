import {TouchableOpacity, Text, Image, GestureResponderEvent, ImageSourcePropType, View} from "react-native";
import React from "react";

// @ts-ignore
const WorkoutButton = ({title, secondaryTitle, handlePress, containerStyles, textStyles, isLoading, image}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-gray-300 rounded-xl min-h-[62px] items-center justify-center m-2 ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            <Image
                source={image}
                className="w-full h-64 object-cover rounded-xl"/>
            <View className="absolute bottom-0 left-0 right-0 bg-gray-300 bg-opacity-75 p-4 rounded-xl">
                <Text className={`text-black font-psemibold text-lg ${textStyles}`}>{title}</Text>
                <Text className={`text-black font-pregular text-xs ${textStyles}`}>{secondaryTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default WorkoutButton;