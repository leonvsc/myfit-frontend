import {View, Text} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import {Link} from "expo-router";

const Signup = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {

    }

    return (
        <SafeAreaView>
            <View className="justify-center w-full min-h-[85vh] px-4">
                <Text className="text-3xl font-bold">Signup to MyFit</Text>
                <FormField
                    title="Username"
                    value={form.username}
                    handleChangeText={(value: any) => setForm({...form, username: value})}
                    otherStyles="mt-7"
                    placeholder="Username" />

                <FormField
                    title="Email"
                    value={form.email}
                    handleChangeText={(value: any) => setForm({...form, email: value})}
                    otherStyles="mt-7"
                    keyboardType="email-address" placeholder="Email" />

                <FormField
                    title="Password"
                    value={form.password}
                    handleChangeText={(value: any) => setForm({...form, password: value})}
                    otherStyles="mt-7" placeholder="Password" />

                <CustomButton
                    title="Sign Up"
                    handlePress={submit}
                    containerStyles="mt-7"
                    isLoading={isSubmitting}
                    textStyles={undefined}
                />

                <View className="justify-center pt-5 flex-row gap-2">
                    <Text className="text-lg text-gray-900 font-pregular">
                        Have an account?
                    </Text>
                    <Link href="/login" className="text-lg font-psemibold ">Login</Link>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signup;