import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function LoginScreen() {
    const router = useRouter();

    const handleLogin = () => {
        // Perform login logic
    };

    return (
        <View className="flex-1 items-center justify-center bg-lightBg">
            <Text className="text-lg font-bold">Login</Text>
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
}
