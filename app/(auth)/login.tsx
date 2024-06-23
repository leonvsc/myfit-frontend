import {View, Text} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import {Link} from "expo-router";

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {

    }

    return (
        <SafeAreaView>
            <View className="justify-center w-full min-h-[85vh] px-4">
            <Text className="text-3xl font-bold">Login to MyFit</Text>
                <FormField
                    title="Email"
                    value={form.email}
                    handleChangeText={(value: any) => setForm({...form, email: value})}
                    otherStyles="mt-7"
                    keyboardType="email-address" placeholder={undefined} />

                <FormField
                    title="Password"
                    value={form.password}
                    handleChangeText={(value: any) => setForm({...form, password: value})}
                    otherStyles="mt-7" placeholder={undefined} />

                <CustomButton
                    title="Login"
                    handlePress={submit}
                    containerStyles="mt-7"
                    isLoading={isSubmitting}
                    textStyles={undefined}
                />

                <View className="justify-center pt-5 flex-row gap-2">
                    <Text className="text-lg text-gray-900 font-pregular">
                        Don't have an account?
                    </Text>
                    <Link href="/signup" className="text-lg font-psemibold ">Sign Up</Link>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login;