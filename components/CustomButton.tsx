import {TouchableOpacity, Text} from "react-native";
import React from "react";

type CustomButtonProps = {
    title: string,
    handlePress: () => void,
    containerStyles?: string,
    textStyles?: string,
    isLoading?: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
      <TouchableOpacity
          onPress={handlePress}
          activeOpacity={0.7}
          className={`bg-amber-500 rounded-xl min-h-[62px] items-center justify-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
          disabled={isLoading}
      >
            <Text className={`text-black font-psemibold text-lg ${textStyles}`}>{title}</Text>
      </TouchableOpacity>
  )
}

export default CustomButton;