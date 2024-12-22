import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import BackButton from '@/src/components/common/BackButton';
import PrimaryInput from '@/src/components/common/PrimaryInput';
import PrimaryButton from '@/src/components/common/PrimaryButton';
import { COMMON_CONSTANTS, REGISTER_SCREEN } from '@/src/constants';

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
                    {COMMON_CONSTANTS.APP.NAME}
                </Text>
            </View>

            {/* Form */}
            <View className="bg-[#2B2B33] rounded-3xl p-6">
                <Text className="text-white text-lg font-bold text-center mb-2">
                    {REGISTER_SCREEN.HEADER.TITLE}
                </Text>
                <Text className="text-gray-400 text-center mb-6">
                    {REGISTER_SCREEN.HEADER.SUBTITLE}
                </Text>

                {/* Input Fields */}
                <View className="gap-y-3">
                    <PrimaryInput
                        placeholder={REGISTER_SCREEN.FORM.USERNAME_PLACEHOLDER}
                        placeholderTextColor="#A0AEC0"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <PrimaryInput
                        placeholder={REGISTER_SCREEN.FORM.MOBILE_PLACEHOLDER}
                        placeholderTextColor="#A0AEC0"
                        keyboardType="phone-pad"
                        value={mobileNumber}
                        onChangeText={setMobileNumber}
                    />
                    <PrimaryInput
                        placeholder={REGISTER_SCREEN.FORM.EMAIL_PLACEHOLDER}
                        placeholderTextColor="#A0AEC0"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <PrimaryButton
                        title={REGISTER_SCREEN.BUTTON.REGISTER}
                        onPress={() => router.push('/auth/otpVerification')}
                    />
                </View>

                {/* Register Button */}
            </View>
        </View>
    );
}
