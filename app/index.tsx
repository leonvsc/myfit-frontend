import {ScrollView, Text, View} from "react-native";
import {Redirect, router} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";

export default function Index() {
  return (
    <SafeAreaView className="bg-gray-100 h-full">
        <ScrollView contentContainerStyle={{height: '100%'}}>
            <View className="items-center justify-center w-full min-h-[85vh] px-4">
                <Text className="text-3xl font-bold">Welcome to MyFit</Text>
                <CustomButton title="Continue to application" handlePress={() => router.push('/home')} containerStyles="mt-7 w-full" textStyles={undefined} isLoading={undefined} />
                <CustomButton title="Login" handlePress={() => router.push('/login')} containerStyles="mt-7 w-full" textStyles={undefined} isLoading={undefined} />
                <CustomButton title="Sign Up" handlePress={() => router.push('/signup')} containerStyles="mt-7 w-full" textStyles={undefined} isLoading={undefined} />
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}
