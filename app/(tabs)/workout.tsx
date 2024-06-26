import {View, Text, ScrollView, FlatList} from "react-native";
import React, {useEffect, useState} from "react";
import {Redirect, router} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {icons, images} from "../../constants";
import WorkoutButton from "@/components/WorkoutButton";
import {getData} from "@/app/apiService/retrieveData";

const navigateToDetails = (workoutId: number) => {
    router.push(`/workoutdetails/${workoutId}`);
};

type Workout = {
    id: string;
    name: string;
};

const Workout = () => {
        return (
            <SafeAreaView className="mb-5">
                <View className="ml-5 mr-5">
                    <Text className="font-pbold text-2xl mt-2 mb-3">Workouts</Text>
                </View>
                <ScrollView>
                    <FlatList
                        data={getData("workouts")}
                        keyExtractor={({_id}) => _id}
                        renderItem={({item}) => (
                            <WorkoutButton handlePress={() => navigateToDetails(item.id)} containerStyles="mr-5 ml-5"
                                           title={item.name} secondaryTitle="A chest workout" image={images.sportschool}
                                           textStyles={undefined} isLoading={undefined}/>
                        )}
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }

export default Workout;