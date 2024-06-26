import {View, TextInput, TouchableOpacity, Image} from "react-native";
import React, {useState} from "react";

import {icons} from "../constants";


type SearchFieldProps = {
    title: string;
    value: string;
    placeholder: string;
    handleChangeText: (text: string) => void;
    otherStyles?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {

    const [searchAction, setSearchAction] = useState(false);

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <View className="w-full h-16 px-4 bg-gray-300 rounded-xl focus:border-amber-500 items-center flex-row">
                <TextInput
                    className="w-full flex-1 text-gray-900 font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#9CA3AF"
                    onChangeText={handleChangeText}
                />
                <TouchableOpacity onPress={() => setSearchAction(searchAction)}>
                    <Image
                        source={icons.search}
                        className="w-6 h-6"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchField;