import {View, Text, ScrollView, FlatList} from "react-native";
import React, {useEffect, useState} from "react";
import {icons, images} from "../../constants";
import {SafeAreaView} from "react-native-safe-area-context";
import {Image} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import CustomButton from "@/components/CustomButton";
import ExerciseButton from "@/components/ExerciseButton";
import Workout from "@/app/(tabs)/workout";
import dayjs from "dayjs";
import WorkoutButton from "@/components/WorkoutButton";
import {getData} from "@/app/apiService/retrieveData";

// TODO: Make API call to get workout details

const workoutDetails = {
    '1': { title: 'Chest', secondaryTitle: 'A chest workout', image: images.sportschool },
    '2': { title: 'Leg', secondaryTitle: 'A leg workout', image: images.sportschool },
    '3': { title: 'Ab', secondaryTitle: 'A ab workout', image: images.sportschool },
    '4': { title: 'Arm', secondaryTitle: 'A arm workout', image: images.sportschool },
    '5': { title: 'Full body', secondaryTitle: 'A full body workout', image: images.sportschool },
    '6': { title: 'Warming up', secondaryTitle: 'A warming up workout', image: images.sportschool },
    '7': { title: 'Cooling down', secondaryTitle: 'A cooling down workout', image: images.sportschool },
};

const navigateToDetails = (exerciseId: number) => {
    router.push(`/exercisedetails/${exerciseId}`);
};

const WorkoutDetails = () => {

    // if (!details) {
    //     return (
    //         <SafeAreaView>
    //             <View>
    //                 <Text>Workout not found.</Text>
    //             </View>
    //         </SafeAreaView>
    //     );
    // }

    // TODO: Make API call to get exercises and put it in a flat list
    return (
        <SafeAreaView className="mb-5">
            <ScrollView>
                <View className="ml-5 mr-5">
                    <View className="flex flex-row items-center">
                        <Image source={icons.dumbbell} resizeMode="contain" className="w-16 h-16 mr-5"/>
                        {/*TODO: change test to information about the workout*/}
                        <Text className="font-pbold text-2xl mt-2 mb-3">test</Text>
                    </View>
                    {/*TODO: change test to information about the workout*/}
                    <Text className="text-lg">test</Text>
                    <CustomButton title="Start workout" handlePress={() => {
                    }} containerStyles="mt-3" textStyles={undefined} isLoading={undefined}/>
                </View>
                <View className=" mt-10">
                    <Text className="font-pbold text-2xl mb-3 ml-5">Exercises</Text>
                    <View className="flex flex-row flex-wrap">

                    <FlatList
                        data={getData("exercises")}
                        keyExtractor={({_id}) => _id}
                        renderItem={({item}) => (
                            <View className="w-full">
                                <ExerciseButton title={item.name} handlePress={() => {navigateToDetails(1)
                                }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>
                            </View>
                        )}
                    />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default WorkoutDetails;