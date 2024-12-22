import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import BackButton from '@/src/components/common/BackButton';

export default function RegisterScreen() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');

    return (
        <View className="flex-1 bg-[#212129] px-4 pt-10">
            {/* Header */}
            <View className="items-center mb-6 relative">
                <BackButton classname="absolute left-0" />
                <Image
                    source={require('../../assets/images/money_icon.png')}
                    className="w-16 h-16 mb-2"
                    resizeMode="contain"
                />
                <Text className="text-teal-400 text-lg font-bold">
                    Money tracker
                </Text>
            </View>

            {/* Form */}
            <View className="bg-[#2B2B33] rounded-3xl p-6">
                <Text className="text-white text-lg font-bold text-center mb-2">
                    Register
                </Text>
                <Text className="text-gray-400 text-center mb-6">
                    Welcome, please create your account using your mobile number
                </Text>

                {/* Input Fields */}
                <View className="bg-gray-700 rounded-xl px-3 py-2 mb-4">
                    <TextInput
                        placeholder="Enter user name"
                        placeholderTextColor="#A0AEC0"
                        className="text-white"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>
                <View className="bg-gray-700 rounded-xl px-3 py-2 mb-4">
                    <TextInput
                        placeholder="Enter your mobile number"
                        placeholderTextColor="#A0AEC0"
                        keyboardType="phone-pad"
                        className="text-white"
                        value={mobileNumber}
                        onChangeText={setMobileNumber}
                    />
                </View>
                <View className="bg-gray-700 rounded-xl px-3 py-2 mb-6">
                    <TextInput
                        placeholder="Enter email address"
                        placeholderTextColor="#A0AEC0"
                        keyboardType="email-address"
                        className="text-white"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                {/* Register Button */}
                <TouchableOpacity
                    className="bg-teal-400 rounded-md py-3"
                    onPress={() => router.push('/auth/otpVerification')}
                >
                    <Text className="text-white text-center font-bold text-lg">
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
