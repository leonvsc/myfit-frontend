import {View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import React, {useState} from "react";

import {icons, images} from "../constants";


// @ts-ignore
const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-900 font-pmedium">{title}</Text>

            <View className="w-full h-16 px-4 bg-gray-300 rounded-xl focus:border-amber-500 items-center flex-row">
                <TextInput
                    className="w-full flex-1 text-gray-900 font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#9CA3AF"
                    onChangeText={handleChangeText}
                    secureTextEntry={title==="Password" && !showPassword}
                />

                {title === "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? icons.eyeClose : icons.eyeOpen}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />

                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField;