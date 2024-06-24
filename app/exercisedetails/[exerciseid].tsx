import {Image, Text, View} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {icons, images} from "../../constants";
import {useLocalSearchParams} from "expo-router";
import CategorieButton from "@/components/CategorieButton";
import ExerciseDetailsButton from "@/components/ExerciseDetailsButton";


// TODO: Mooier maken dmv buttons met aantal kg en herhalingen?
// TODO: API call maken om de details van de oefening op te halen
// TODO: Images omzetten naar videos

const exerciseDetails = {
    '1': { title: 'Bench Press', image: images.benchpress },
    '2': { title: 'Incline Bench Press', image: images.benchpress },
    '3': { title: 'Decline Bench Press', image: images.benchpress },
    '4': { title: 'Dumbbell Bench Press', image: images.benchpress },
    '5': { title: 'Dumbbell Incline Bench Press', image: images.benchpress },
}

const ExerciseDetails = () => {
    const local = useLocalSearchParams<{exerciseid:string}>();
    const details = exerciseDetails[local.exerciseid as keyof typeof exerciseDetails];

    if (!details) {
        return (
            <SafeAreaView>
                <View>
                    <Text>Workout not found.</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="mb-5">
            <View className="ml-5 mr-5">
                <Text className="font-pbold text-2xl mt-2 mb-3">Exercise details</Text>
                <Text className="text-lg">{details.title}</Text>

                <Image source={details.image} resizeMode="contain" className="w-full h-64"/>
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
                        <ExerciseDetailsButton title="Weight" handlePress={undefined} containerStyles="w-1/3"
                                               textStyles={undefined} isLoading={undefined} icon={undefined}
                                               number="5" />

                    </View>
                    <Text className="text-lg font-psemibold">
                        Description
                    </Text>

                    <Text className="font-pregular ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et consectetur felis, quis gravida mi. Duis congue sem varius justo dignissim, eget lobortis mi facilisis. Donec at lobortis lacus, in hendrerit massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus sit amet efficitur lectus. Donec pellentesque sollicitudin maximus. Vivamus sed scelerisque ipsum.
                    </Text>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default ExerciseDetails;