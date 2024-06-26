import {TouchableOpacity, Text, Image, GestureResponderEvent, ImageSourcePropType, View} from "react-native";
import React from "react";
import {icons} from "../constants";

type ExerciseButtonProps = {
    title: string;
    handlePress: (event: GestureResponderEvent) => void;
    containerStyles?: string;
    textStyles?: string;
    isLoading?: boolean;
    image: ImageSourcePropType;
}

const ExerciseButton: React.FC<ExerciseButtonProps> = ({title, handlePress, containerStyles, textStyles, isLoading, image}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`min-h-[62px] flex-row items-center justify-between m-2 ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
        >
            <View className="flex-row items-center">
            <Image
                source={image}
                className="w-10 h-10 rounded-xl ml-5 mr-5"
                resizeMode="contain"
            />
                <Text className={`text-black font-pregular text-lg ${textStyles}`}>{title}</Text>
            </View>

            <View className="flex flex-row-reverse items-center">
                <Image
                    source={icons.angleRight}
                    className="w-5 h-5 mr-5"
                    resizeMode="contain"
                />
            </View>
        </TouchableOpacity>
    )
}
export default ExerciseButton;