import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAppDispatch } from '@/src/hooks/useTypedSelector';
import { logout } from '@/src/redux/auth/authSlice';
import ConfirmationModal from '@/src/components/common/modals/ConfirmationModal';

export default function ProfileScreen() {
    const router = useRouter();
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const menuOptions: {
        id: number;
        label: string;
        icon: keyof typeof Ionicons.glyphMap;
        onPress: () => void;
    }[] = [
        {
            id: 1,
            label: 'Edit profile',
            icon: 'person-outline',
            onPress: () => router.push('/home/about'),
        },
        {
            id: 2,
            label: 'Privacy policy',
            icon: 'shield-outline',
            onPress: () => router.push('/home/about'),
        },
        {
            id: 3,
            label: 'Terms & condition',
            icon: 'document-outline',
            onPress: () => router.push('/home/about'),
        },
        {
            id: 4,
            label: 'Rate us',
            icon: 'star-outline',
            onPress: () => router.push('/home/about'),
        },
    ];

    const handleLogout = () => {
        dispatch(logout());
        setModalVisible(false);
        Alert.alert('Logged out', 'You have successfully logged out.');
        router.replace('/auth/login'); // Navigate to Login
    };

    const openLogoutModal = () => {
        setModalVisible(true);
    };

    return (
        <View className="flex-1 bg-darkBg">
            {/* Header */}
            <View className="bg-teal-400 h-16 flex-row items-center px-4">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text className="text-white font-bold text-lg ml-4">
                    Profile
                </Text>
            </View>

            {/* Profile Section */}
            <View className="items-center mt-6">
                <Image
                    source={{ uri: 'https://i.pravatar.cc/300' }} // Replace with actual profile picture URL
                    className="h-24 w-24 rounded-full"
                />
                <Text className="text-white font-bold text-xl mt-4">
                    Darshan Shah
                </Text>
                <Text className="text-gray-400 text-sm">
                    darshanshah@mail.com
                </Text>
            </View>

            {/* Menu Options */}
            <View className="mt-6 space-y-2">
                {menuOptions.map((option) => (
                    <TouchableOpacity
                        key={option.id}
                        onPress={option.onPress}
                        className="flex-row justify-between items-center bg-gray-800 py-4 px-4 rounded-lg"
                    >
                        <View className="flex-row items-center space-x-3">
                            <Ionicons
                                name={option.icon}
                                size={20}
                                color="white"
                            />
                            <Text className="text-white text-base">
                                {option.label}
                            </Text>
                        </View>
                        <Ionicons
                            name="chevron-forward"
                            size={20}
                            color="white"
                        />
                    </TouchableOpacity>
                ))}

                {/* Logout Option */}
                <TouchableOpacity
                    onPress={openLogoutModal}
                    className="flex-row justify-between items-center bg-gray-800 py-4 px-4 rounded-lg mt-2"
                >
                    <View className="flex-row items-center space-x-3">
                        <Ionicons name="exit-outline" size={20} color="red" />
                        <Text className="text-red-500 text-base">Logout</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="red" />
                </TouchableOpacity>
            </View>
            <ConfirmationModal
                visible={isModalVisible}
                onCancel={() => setModalVisible(false)}
                onConfirm={handleLogout}
                message="Are you sure you want to logout this account?"
                confirmText="Logout"
                cancelText="Cancel"
                icon="exit-outline"
            />
        </View>
    );
}
