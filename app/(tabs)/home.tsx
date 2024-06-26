import {View, Text, Image} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import Button2 from "@/components/Button2";
import {icons, images} from "../../constants";
import CategorieButton from "@/components/CategorieButton";


const Home = () => {
    return (
        <SafeAreaView>
        <View className="ml-5 mr-5">
            <Text className="font-pbold text-2xl mt-2 mb-3">Welcome to MyFit</Text>
            <Text className="font-pregular text-lg">Start your workout journey mindfuly</Text>

            <View className="bg-gray-300 flex min-h-[20vh] rounded-xl mt-8 mb-8 justify-around items-center px-4 flex-row">
                <View className="flex w-1/2">
                    <Text className="text-2xl font-psemibold">Find inner strength like a boss</Text>
                    <Button2 title="Add" handlePress={() => {}} containerStyles="w-20 mt-5" isLoading={undefined} textStyles={undefined}></Button2>
                </View>
                <View className="flex w-1/2 items-center">
                    <Image
                    source={images.lion}
                    resizeMode="contain"
                    className="w-40 h-40"
                    />
                </View>
            </View>

            <View className="">
                <Text className="font-pbold text-xl">Excercise categories</Text>
                <View className="flex flex-row justify-around">
                    <CategorieButton handlePress={() => {}} containerStyles="w-1/3" title="Chest" icon={icons.dumbbell} textStyles={undefined} isLoading={undefined}/>
                    <CategorieButton handlePress={() => {}} containerStyles="w-1/3" title="Legs" icon={icons.dumbbell} textStyles={undefined} isLoading={undefined}/>
                </View>
                <View className=" flex flex-row justify-around mt-5">
                    <CategorieButton handlePress={() => {}} containerStyles="w-1/3" title="Back" icon={icons.dumbbell} textStyles={undefined} isLoading={undefined}/>
                    <CategorieButton handlePress={() => {}} containerStyles="w-1/3" title="Arms" icon={icons.dumbbell} textStyles={undefined} isLoading={undefined}/>
                </View>
            </View>
        </View>
        </SafeAreaView>
    )
}

export default Home;