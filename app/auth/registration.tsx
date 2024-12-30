import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

import BackButton from '@/src/components/common/BackButton';
import PrimaryInput from '@/src/components/common/PrimaryInput';
import PrimaryButton from '@/src/components/common/PrimaryButton';
import { COMMON_CONSTANTS, REGISTER_SCREEN } from '@/src/constants';
import { useAppDispatch, useTypedSelector } from '@/src/hooks/useTypedSelector';
import {
    setRegistration,
    setRegistrationError,
} from '@/src/redux/auth/authSlice';
import { useRegisterMutation } from '@/src/redux/auth/authApi';
import {
    emailValidate,
    passwordValidate,
    usernameValidate,
} from '@/src/utils/validation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { registration, registrationError } = useTypedSelector(
        (state) => state.auth,
    );
    const [register, { isLoading }] = useRegisterMutation();

    const onChangeInputFields = (field: string, value: string) => {
        dispatch(setRegistration({ ...registration, [field]: value }));
    };

    const handleRegister = async () => {
        const emailError = emailValidate(registration.email);
        const passwordError = passwordValidate(registration.password);
        const usernameError = usernameValidate(registration.username);

        if (emailError || passwordError || usernameError) {
            dispatch(
                setRegistrationError({
                    username: {
                        isError: !!usernameError,
                        message: usernameError || '',
                    },
                    email: { isError: !!emailError, message: emailError || '' },
                    password: {
                        isError: !!passwordError,
                        message: passwordError || '',
                    },
                }),
            );
            return;
        }

        try {
            const response = await register(registration).unwrap();
            console.log('Registration Successful:', response);

            // Success message
            Alert.alert(
                'Registration Successful',
                'Your account has been created successfully. Please log in to continue.',
            );

            // Navigate to Login Screen
            router.replace('/auth/login');
        } catch (error: any) {
            console.error('Registration Failed:', error);
            Alert.alert(
                'Registration Failed',
                error?.data?.message || 'An unexpected error occurred.',
            );
        }
    };

    const goToLogin = () => {
        router.push('/auth/login');
    };

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
                    {REGISTER_SCREEN.HEADER.REGISTER_TITLE}
                </Text>
                <Text className="text-gray-400 text-center mb-6">
                    {REGISTER_SCREEN.HEADER.REGISTER_SUBTITLE}
                </Text>

                {/* Input Fields */}
                <View className="gap-y-3">
                    <PrimaryInput
                        placeholder={REGISTER_SCREEN.FORM.USERNAME_PLACEHOLDER}
                        placeholderTextColor="#A0AEC0"
                        value={registration.username}
                        onChangeText={(value) =>
                            onChangeInputFields('username', value)
                        }
                        errorMessage={registrationError.username.message}
                    />
                    <PrimaryInput
                        placeholder={REGISTER_SCREEN.FORM.EMAIL_PLACEHOLDER}
                        placeholderTextColor="#A0AEC0"
                        keyboardType="email-address"
                        value={registration.email}
                        onChangeText={(value) =>
                            onChangeInputFields('email', value)
                        }
                        errorMessage={registrationError.email.message}
                    />
                    <PrimaryInput
                        placeholder={REGISTER_SCREEN.FORM.PASSWORD_PLACEHOLDER}
                        placeholderTextColor="#A0AEC0"
                        value={registration.password}
                        onChangeText={(value) =>
                            onChangeInputFields('password', value)
                        }
                        errorMessage={registrationError.password.message}
                        secureTextEntry
                    />
                    <PrimaryButton
                        title={
                            isLoading
                                ? REGISTER_SCREEN.BUTTON.REGISTERING
                                : REGISTER_SCREEN.BUTTON.REGISTER
                        }
                        onPress={handleRegister}
                        disabled={isLoading}
                    />
                    <View className="flex flex-row justify-center mt-4">
                        <Text className="text-gray-400">
                            {REGISTER_SCREEN.ALREADY_ACCOUNT}{' '}
                        </Text>
                        <TouchableOpacity onPress={goToLogin}>
                            <Text className="text-teal-400 font-bold underline">
                                {REGISTER_SCREEN.LOG_IN}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
