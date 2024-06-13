import {Image, Text, View} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {icons, images} from "../../constants";
import {useLocalSearchParams} from "expo-router";


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

                    <Text>
                        5 herhalingen
                    </Text>

                    <Text>
                        5 sets
                    </Text>

                    <Text>
                        5kg
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ExerciseDetails;