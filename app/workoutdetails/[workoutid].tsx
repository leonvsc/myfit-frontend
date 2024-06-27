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
import {getData, getWorkoutById} from "@/app/apiService/retrieveData";
import {useRoute} from "@react-navigation/core";

// TODO: Make API call to get workout details

const navigateToDetails = (exerciseId: string) => {
    router.push(`/exercisedetails/${exerciseId}`);
};

const WorkoutDetails = () => {
    const local = useLocalSearchParams<{workoutid:string}>();
    const workoutId = local.workoutid as keyof typeof local;

    const { data, isLoading } = getWorkoutById(workoutId);

    // if (!details) {
    //     return (
    //         <SafeAreaView>
    //             <View>
    //                 <Text>Types not found.</Text>
    //             </View>
    //         </SafeAreaView>
    //     );
    // }

    return (
        <SafeAreaView className="mb-5">
                <View className="ml-5 mr-5">
                    <View className="flex flex-row items-center">
                        <Image source={icons.dumbbell} resizeMode="contain" className="w-16 h-16 mr-5"/>
                        {/*TODO: change test to information about the workout*/}
                        <Text className="font-pbold text-2xl mt-2 mb-3">{data?.name}</Text>
                    </View>
                    {/*TODO: change test to information about the workout*/}
                    <Text className="text-lg">{data?.description}</Text>
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
                                <ExerciseButton title={item.name} handlePress={() => {navigateToDetails(item._id)
                                }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>
                            </View>
                        )}
                    />
                    </View>
                </View>
        </SafeAreaView>
    );
}

export default WorkoutDetails;