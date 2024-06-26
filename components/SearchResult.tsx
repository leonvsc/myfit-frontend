import {Text, Image, TouchableOpacity} from "react-native";
import React from "react";

type SearchResultProps = {
    icon: any,
    handlePress: any
}

const SearchResult: React.FC<SearchResultProps> = ({icon, handlePress}) => {
    return (
    <TouchableOpacity
        className="flex-row items-center bg-gray-200 rounded-xl w-full h-16 px-4 mb-5"
        onPress={handlePress}
        activeOpacity={0.7}
    >
        <Image
            source={icon}
            resizeMode="contain"
            className="w-10 h-10"/>
        <Text className="ml-5 text-lg font-pmedium">
            SearchResult
        </Text>
    </TouchableOpacity>
    )
}

export default SearchResult;