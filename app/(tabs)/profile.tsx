import {View, Text, Image, TouchableOpacity} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {icons, images} from "../../constants";
import ProfileShowStats from "@/components/ProfileShowStats";
import ProfileButton from "@/components/ProfileButton";

const Profile = () => {
    return (
        <SafeAreaView className="mb-5">
            <View className="">
                <Image
                    source={images.sportschool}
                    className="w-full h-48 rounded-xl"/>
            </View>
            <View className="ml-5 mr-5 items-center">
                <Image
                source={images.blankProfile}
                className="w-24 h-24 rounded-2xl absolute -top-12"
                />
                <TouchableOpacity
                    className=" absolute top-3 right-0"
                activeOpacity={0.7}
                >
                <Image
                source={icons.gear}
                className="w-8 h-8"
                />
                </TouchableOpacity>
            </View>

            <View className="ml-5 mr-5 items-center mt-16">
                <Text className="font-pbold text-2xl mt-2 mb-1">John Doe</Text>
                <Text className="font-pmedium text-lg mb-3 text-gray-500">Member since 2021</Text>
            </View>

            <View className="ml-5 mr-5 mt-10">
                <Text className="font-pbold text-2xl">Personal Stats</Text>
            </View>

            <View className="ml-5 mr-5 mt-5 flex-row justify-around">
                <ProfileShowStats icon={icons.calculator} title={"BMI"} value={22}/>
                <ProfileShowStats icon={icons.weightScale} title={"Weight"} value={75}/>
            </View>

            <View className="ml-5 mr-5 mt-10 text-re">
                <ProfileButton title={"Achievements"} icon={icons.medal} handlePress={undefined}/>
                <ProfileButton title={"Delete your account"} icon={icons.ban} handlePress={undefined} textStyles={"text-red-600 font-pbold"}/>
            </View>
        </SafeAreaView>
    )
}

export default Profile;