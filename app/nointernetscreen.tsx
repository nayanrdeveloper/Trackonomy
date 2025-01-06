import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const NoInternetScreen: React.FC = () => {
    const router = useRouter();

    const retryConnection = () => {
        router.replace('/'); // Retry app initialization
    };

    return (
        <View className="flex-1 justify-center items-center bg-[#212129]">
            <Text className="text-white text-lg font-bold mb-4">
                No Internet Connection
            </Text>
            <Text className="text-gray-400 text-center mb-6">
                Please check your internet connection and try again.
            </Text>
            <TouchableOpacity
                className="bg-teal-400 py-3 px-6 rounded-lg"
                onPress={retryConnection}
            >
                <Text className="text-white font-bold">Retry</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NoInternetScreen;
