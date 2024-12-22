import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import MyStatusBar from '@/src/components/common/MyStatusBar';

export default function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/onBoardingScreen');
        }, 2000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <View className="flex-1 bg-darkBg items-center justify-center">
            <MyStatusBar />
            {/* Icon */}
            <Image
                source={require('../assets/images/money_icon.png')} // Replace with your app icon
                className="w-24 h-24 mb-5"
                resizeMode="contain"
            />

            {/* App Name */}
            <Text className="text-2xl font-bold text-teal-400">Trackonomy</Text>
        </View>
    );
}
