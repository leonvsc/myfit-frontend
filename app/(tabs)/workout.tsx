import {View, Text, ScrollView} from "react-native";
import React from "react";
import {Redirect, router} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {icons, images} from "../../constants";
import WorkoutButton from "@/components/WorkoutButton";

const navigateToDetails = (workoutId: number) => {
    router.push(`/workoutdetails/${workoutId}`);
};

const Workout = () => {
    return (
        <SafeAreaView className="mb-5">
            <View className="ml-5 mr-5">
                <Text className="font-pbold text-2xl mt-2 mb-3">Workouts</Text>
            </View>
            <ScrollView>
                <WorkoutButton handlePress={() => navigateToDetails(1)} containerStyles="mr-5 ml-5" title="Chest" secondaryTitle="A chest workout"  image={images.sportschool} textStyles={undefined} isLoading={undefined}/>
                <WorkoutButton handlePress={() => {}} containerStyles="mr-5 ml-5" title="Leg" secondaryTitle="A leg workout"  image={images.sportschool} textStyles={undefined} isLoading={undefined}/>
                <WorkoutButton handlePress={() => {}} containerStyles="mr-5 ml-5" title="Ab" secondaryTitle="A ab workout"  image={images.sportschool} textStyles={undefined} isLoading={undefined}/>
                <WorkoutButton handlePress={() => {}} containerStyles="mr-5 ml-5" title="Arm" secondaryTitle="A arm workout"  image={images.sportschool} textStyles={undefined} isLoading={undefined}/>
                <WorkoutButton handlePress={() => {}} containerStyles="mr-5 ml-5" title="Full body" secondaryTitle="A full body workout"  image={images.sportschool} textStyles={undefined} isLoading={undefined}/>
                <WorkoutButton handlePress={() => {}} containerStyles="mr-5 ml-5" title="Warming up" secondaryTitle="A warming up workout"  image={images.sportschool} textStyles={undefined} isLoading={undefined}/>
                <WorkoutButton handlePress={() => {}} containerStyles="mr-5 ml-5" title="Cooling down" secondaryTitle="A cooling down workout"  image={images.sportschool} textStyles={undefined} isLoading={undefined}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Workout;