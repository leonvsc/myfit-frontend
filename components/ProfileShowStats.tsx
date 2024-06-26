import {Image, ImageSourcePropType, Text, View} from "react-native";
import React from "react";

type ProfileShowStatsProps = {
    icon: ImageSourcePropType;
    title: string;
    value: number;
}

const ProfileShowStats: React.FC<ProfileShowStatsProps> = ({icon, title, value}) => {
    return (
        <View className="items-center">
            <Image
            source={icon}
            className="w-11 h-11 mb-3"
            resizeMode="contain"
            />
            <Text className="text-3xl font-pbold">{value}</Text>
            <Text className="font-pmedium text-gray-500">{title}</Text>
        </View>
    )
}

export default ProfileShowStats;