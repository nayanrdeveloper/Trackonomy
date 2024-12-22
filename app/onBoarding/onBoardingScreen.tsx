import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import MyStatusBar from '@/src/components/common/MyStatusBar';

const onboardingData = [
    {
        id: 1,
        title: 'Effortlessly Manage Your Expenses and Income',
        description:
            'Gain full control over your finances by categorizing your expenses and tracking your income seamlessly. Stay informed and organized with ease.',
        image: require('../../assets/images/save_money.png'),
    },
    {
        id: 2,
        title: 'Save Money and Achieve Your Financial Goals',
        description:
            'Set savings goals, track your progress, and build financial discipline. Achieve your dreams with smarter money management.',
        image: require('../../assets/images/goal.png'),
    },
    {
        id: 3,
        title: 'Leverage AI to Manage Your Expenses',
        description:
            'Utilize advanced AI insights to analyze spending patterns, provide personalized recommendations, and help you make informed financial decisions.',
        image: require('../../assets/images/money_ai.png'),
    },
    {
        id: 4,
        title: 'Stay Informed with Real-Time Updates',
        description:
            'Monitor your transactions and budgets in real-time. Stay updated on where your money is going, anytime, anywhere.',
        image: require('../../assets/images/reat_time_update.png'),
    },
    {
        id: 5,
        title: 'Make Smarter Decisions with Analytics',
        description:
            'Analyze your spending habits with easy-to-understand graphs and charts. Make data-driven decisions to improve your financial health.',
        image: require('../../assets/images/money_anayltics.png'),
    },
];

export default function OnboardingScreen() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter();

    const handleNext = () => {
        if (currentSlide < onboardingData.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            router.replace('/auth/registration');
        }
    };

    const handleSkip = () => {
        router.replace('/auth/registration');
    };

    return (
        <View className="flex-1 bg-darkBg">
            <MyStatusBar />
            <View className="absolute top-12 right-6">
                <TouchableOpacity onPress={handleSkip}>
                    <Text className="text-teal-400 font-bold">Skip</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-1 items-center justify-center">
                <Image
                    source={onboardingData[currentSlide].image}
                    className="h-64 w-64"
                    resizeMode="contain"
                />
            </View>
            <View className="rounded-t-3xl bg-[#37373E] p-6">
                <Text className="text-center text-teal-400 text-lg font-bold mb-2">
                    {onboardingData[currentSlide].title}
                </Text>
                <Text className="text-center text-gray-400 mb-4">
                    {onboardingData[currentSlide].description}
                </Text>
                <View className="flex-row justify-center mt-2 mb-6">
                    {onboardingData.map((_, index) => (
                        <View
                            key={index}
                            className={`h-2 w-2 mx-1 rounded-full ${
                                index === currentSlide
                                    ? 'bg-teal-400'
                                    : 'bg-gray-500'
                            }`}
                        />
                    ))}
                </View>
                <TouchableOpacity
                    onPress={handleNext}
                    className="bg-teal-400 py-3 rounded-lg"
                >
                    <Text className="text-center text-white font-bold text-lg">
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
