import { useRouter } from 'expo-router';
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import BackButton from '@/src/components/common/BackButton';

export default function OTPVerificationScreen() {
    const router = useRouter();
    const [otp, setOtp] = useState(['', '', '', '', '']); // 5-digit OTP
    const [timer, setTimer] = useState(59); // Countdown timer
    const inputs = useRef<any>([]);

    // Start Timer
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev === 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Handle OTP Input
    const handleChange = (value: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus on next input
        if (value && index < otp.length - 1) {
            inputs.current[index + 1].focus();
        }
    };

    // Handle Resend OTP
    const handleResend = () => {
        setTimer(59);
        alert('OTP resent');
    };

    // Handle Verify
    const handleVerify = () => {
        if (otp.join('').length === 5) {
            alert('OTP Verified: ' + otp.join(''));
            router.push('/home'); // Navigate to home or dashboard
        } else {
            alert('Please enter the complete OTP.');
        }
    };

    return (
        <View className="flex-1 bg-darkBg px-4 pt-10">
            {/* Header Section */}
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

            {/* OTP Section */}
            <View className="bg-gray-800 p-6 rounded-2xl items-center">
                <Text className="text-white text-lg font-bold mb-2">
                    OTP Verification
                </Text>
                <Text className="text-gray-400 text-center mb-6">
                    A 5 digit code was sent to your mobile number
                    {'\n'}
                    <Text className="font-bold">+91 1234567890</Text>
                </Text>

                {/* OTP Inputs */}
                <View className="flex-row justify-between w-4/5 mb-6">
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(el) => (inputs.current[index] = el)}
                            className="bg-gray-700 text-white text-lg text-center w-10 h-12 rounded-md"
                            keyboardType="numeric"
                            maxLength={1}
                            value={digit}
                            onChangeText={(value) => handleChange(value, index)}
                            onKeyPress={({ nativeEvent }) => {
                                if (
                                    nativeEvent.key === 'Backspace' &&
                                    index > 0 &&
                                    !digit
                                ) {
                                    inputs.current[index - 1].focus();
                                }
                            }}
                        />
                    ))}
                </View>

                {/* Timer */}
                <Text className="text-teal-400 text-lg font-bold mb-4">{`00:${timer < 10 ? `0${timer}` : timer}`}</Text>

                {/* Verify Button */}
                <TouchableOpacity
                    className="bg-teal-400 w-4/5 rounded-md py-3 mb-6"
                    onPress={handleVerify}
                >
                    <Text className="text-white text-lg font-bold text-center">
                        Verify
                    </Text>
                </TouchableOpacity>

                {/* Resend Option */}
                <View className="flex-row items-center">
                    <Text className="text-gray-400 text-sm">
                        Didn’t receive code?
                    </Text>
                    <TouchableOpacity onPress={handleResend}>
                        <Text className="text-teal-400 text-sm font-bold">
                            {' '}
                            Resend
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
