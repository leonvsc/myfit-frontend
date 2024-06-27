import {View, Text, ScrollView, FlatList} from "react-native";
import {Redirect, router} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import { images} from "../../constants";
import WorkoutButton from "@/components/WorkoutButton";
import {getData} from "@/app/apiService/retrieveData";

const navigateToDetails = (workoutId: string) => {
    router.push(`/workoutdetails/${workoutId}`);
};

type Workout = {
    _id: string;
    name: string;
    description: string;
};

const Workout = () => {
        return (
            <SafeAreaView className="mb-5">
                <View className="ml-5 mr-5">
                    <Text className="font-pbold text-2xl mt-2 mb-3">Workouts</Text>
                </View>
                    <FlatList
                        data={getData("workouts")}
                        keyExtractor={({_id}) => _id}
                        renderItem={({item}) => (
                            <WorkoutButton handlePress={() => navigateToDetails(item._id)} containerStyles="mr-5 ml-5"
                                           title={item.name} secondaryTitle={item.description} image={images.sportschool}
                                           textStyles={undefined} isLoading={undefined}/>
                        )}
                    />
            </SafeAreaView>
        )
    }

export default Workout;