import {Image, Text, View} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import { images} from "../../constants";
import {useLocalSearchParams} from "expo-router";
import ExerciseDetailsButton from "@/components/ExerciseDetailsButton";
import {getExerciseById, getWorkoutById} from "@/app/apiService/retrieveData";


// TODO: Mooier maken dmv buttons met aantal kg en herhalingen?
// TODO: API call maken om de details van de oefening op te halen
// TODO: Images omzetten naar videos


const ExerciseDetails = () => {
    const local = useLocalSearchParams<{exerciseid:string}>();
    const exerciseId = local.exerciseid as keyof typeof local;

    const { data, isLoading } = getExerciseById(exerciseId);

    return (
        <SafeAreaView className="mb-5">
            <View className="ml-5 mr-5">
                <Text className="font-pbold text-2xl mt-2 mb-3">Exercise details</Text>
                <Text className="text-lg">{data?.name}</Text>

                <Image source={images.pushup} resizeMode="contain" className="w-full h-64"/>
                <View>
                    <Text className="text-lg font-psemibold">
                        Details
                    </Text>

                    <View className="justify-center mr-5 ml-5 flex-row">
                        <ExerciseDetailsButton title="Sets" handlePress={undefined} containerStyles="w-1/3"
                                               textStyles={undefined} isLoading={undefined} icon={undefined}
                                               number="5" />
                        <ExerciseDetailsButton title="Reps" handlePress={undefined} containerStyles="w-1/3"
                                               textStyles={undefined} isLoading={undefined} icon={undefined}
                                               number="5" />
                        <ExerciseDetailsButton title="KG" handlePress={undefined} containerStyles="w-1/3"
                                               textStyles={undefined} isLoading={undefined} icon={undefined}
                                               number="5" />

                    </View>
                    <Text className="text-lg font-psemibold">
                        Description
                    </Text>

                    <Text className="font-pregular "> {data?.description} </Text>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default ExerciseDetails;