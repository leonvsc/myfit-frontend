import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import axios, { AxiosError } from 'axios';

const hankoUrl = "https://ebc6b9fe-ca5f-4256-8ef9-a3907104f110.hanko.io";
const origin = "https://myfitavans.xyz";

const Login: React.FC = () => {
    const [form, setForm] = useState<{ email: string }>({ email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passcodeSent, setPasscodeSent] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);
    const [passcode, setPasscode] = useState<string>("");

    const axiosConfig = {
        headers: {
            'Origin': origin,
            'Content-Type': 'application/json'
        }
    };

    const checkUserExists = async () => {
        try {
            const response = await axios.post(`${hankoUrl}/users`, { email: form.email }, axiosConfig);
            if (response.status === 200 && response.data) {
                setUserId(response.data.id);
                sendPasscode(response.data.id);
            }
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError.response?.status === 404) {
                createUser();
            } else {
                console.error("Error checking user existence", axiosError);
            }
        }
    };

    const createUser = async () => {
        try {
            const response = await axios.post(`${hankoUrl}/users`, { email: form.email }, axiosConfig);
            if (response.status === 200) {
                setUserId(response.data.id);
                sendPasscode(response.data.id);
            }
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error("Error creating user", axiosError);
        }
    };

    const sendPasscode = async (id: string) => {
        try {
            const response = await axios.post(`${hankoUrl}/passcode/login/initialize`, { user_id: id }, axiosConfig);
            if (response.status === 200) {
                setPasscodeSent(true);
            }
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error("Error sending passcode", axiosError);
        }
    };

    const finalizeLogin = async () => {
        try {
            const response = await axios.post(`${hankoUrl}/passcode/verify`, {
                passcode_id: userId,
                passcode: passcode
            }, axiosConfig);
            if (response.status === 200) {
                console.log("Login successful", response.data);
            }
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error("Error verifying passcode", axiosError);
        }
    };

    const submit = () => {
        setIsSubmitting(true);
        if (passcodeSent) {
            finalizeLogin();
        } else {
            checkUserExists();
        }
        setIsSubmitting(false);
    };

    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center', width: '100%', minHeight: '85%', paddingHorizontal: 16 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Login to MyFit</Text>
                <TextInput
                    style={{ marginTop: 28, borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 8 }}
                    placeholder="Email"
                    keyboardType="email-address"
                    value={form.email}
                    onChangeText={(value) => setForm({ ...form, email: value })}
                />
                {passcodeSent && (
                    <TextInput
                        style={{ marginTop: 28, borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 8 }}
                        placeholder="Passcode"
                        value={passcode}
                        onChangeText={(value) => setPasscode(value)}
                    />
                )}
                <View style={{ marginTop: 28 }}>
                    {isSubmitting ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : (
                        <Button title={passcodeSent ? "Verify Passcode" : "Send Passcode"} onPress={submit} />
                    )}
                </View>
                <View style={{ justifyContent: 'center', paddingTop: 20, flexDirection: 'row', gap: 8 }}>
                    <Text style={{ fontSize: 18, color: '#4a4a4a' }}>Don't have an account?</Text>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#0000ff' }}>Sign Up</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Login;
