import {View, Text, ScrollView} from "react-native";
import React from "react";
import {icons, images} from "../../constants";
import {SafeAreaView} from "react-native-safe-area-context";
import {Image} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import CustomButton from "@/components/CustomButton";
import ExerciseButton from "@/components/ExerciseButton";

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
    const local = useLocalSearchParams<{workoutid:string}>();
    const details = workoutDetails[local.workoutid as keyof typeof workoutDetails];

    if (!details) {
        return (
            <SafeAreaView>
                <View>
                    <Text>Workout not found.</Text>
                </View>
            </SafeAreaView>
        );
    }

    // TODO: Make API call to get exercises and put it in a flat list
    // TODO: Only exercises needs to be scrollable
    return (
        <SafeAreaView className="mb-5">
            <ScrollView className="lg:max-h-screen">
            <View className="ml-5 mr-5">
                <View className="flex flex-row items-center">
                    <Image source={icons.dumbbell} resizeMode="contain" className="w-16 h-16 mr-5"/>
                <Text className="font-pbold text-2xl mt-2 mb-3">{details.title}</Text>
                </View>
                <Text className="text-lg">{details.secondaryTitle}</Text>
                <CustomButton title="Start workout" handlePress={() => {
                }} containerStyles="mt-3" textStyles={undefined} isLoading={undefined}/>
            </View>
            <View className=" mt-10">
                <Text className="font-pbold text-2xl mb-3 ml-5">Exercises</Text>
                    <View className="flex flex-row flex-wrap">
                        <View className="w-full">
                            <ExerciseButton title="Bench press" handlePress={() => {navigateToDetails(1)
                            }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>

                            <ExerciseButton title="Incline bench press" handlePress={() => {navigateToDetails(2)
                            }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>

                            <ExerciseButton title="Decline bench press" handlePress={() => {navigateToDetails(3)
                            }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>

                            <ExerciseButton title="Dumbbell fly" handlePress={() => {navigateToDetails(4)
                            }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>

                            <ExerciseButton title="Chest press" handlePress={() => {navigateToDetails(5)
                            }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>

                            <ExerciseButton title="Chest fly" handlePress={() => {navigateToDetails(6)
                            }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>

                            <ExerciseButton title="Chest dip" handlePress={() => {navigateToDetails(7)
                            }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>

                            <ExerciseButton title="Push up" handlePress={() => {
                            }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>

                            <ExerciseButton title="Pull over" handlePress={() => {
                            }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>

                            <ExerciseButton title="Chest press" handlePress={() => {
                            }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>

                            <ExerciseButton title="Chest press" handlePress={() => {
                            }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>

                            <ExerciseButton title="Chest press" handlePress={() => {
                            }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>

                            <ExerciseButton title="Chest press" handlePress={() => {
                            }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>

                            <ExerciseButton title="Chest press" handlePress={() => {
                            }} containerStyles="" textStyles={undefined} isLoading={undefined} image={icons.dumbbell}/>

                        </View>
                    </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default WorkoutDetails;