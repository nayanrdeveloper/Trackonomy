import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ConfirmationModal from '@/src/components/common/modals/ConfirmationModal';
import { useRouter } from 'expo-router';
import { useAppDispatch } from '@/src/hooks/useTypedSelector';
import { logout } from '@/src/redux/auth/authSlice';

export default function ProfileScreen() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
    const [isRateUsModalVisible, setRateUsModalVisible] = useState(false);
    const [rating, setRating] = useState(0);

    const menuOptions = [
        {
            id: 1,
            label: 'Edit profile',
            icon: 'person-outline',
            onPress: () => router.push('/settings/edit-profile'),
        },
        {
            id: 2,
            label: 'Privacy policy',
            icon: 'shield-outline',
            onPress: () => router.push('/settings/privacy-policy'),
        },
        {
            id: 3,
            label: 'Terms & condition',
            icon: 'document-outline',
            onPress: () => router.push('/settings/term-condition'),
        },
        {
            id: 4,
            label: 'Rate us',
            icon: 'star-outline',
            onPress: () => setRateUsModalVisible(true), // Open Rate Us modal
        },
    ];

    const handleLogout = () => {
        dispatch(logout());
        setLogoutModalVisible(false);
        Alert.alert('Logged out', 'You have successfully logged out.');
        router.replace('/auth/login');
    };

    const handleRatingSubmit = () => {
        Alert.alert('Thank you!', `You rated us ${rating} stars!`);
        setRateUsModalVisible(false);
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
                    source={{ uri: 'https://i.pravatar.cc/300' }}
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
                                name={option.icon as any}
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
                    onPress={() => setLogoutModalVisible(true)}
                    className="flex-row justify-between items-center bg-gray-800 py-4 px-4 rounded-lg mt-2"
                >
                    <View className="flex-row items-center space-x-3">
                        <Ionicons name="exit-outline" size={20} color="red" />
                        <Text className="text-red-500 text-base">Logout</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color="red" />
                </TouchableOpacity>
            </View>

            {/* Confirmation Modal */}
            <ConfirmationModal
                visible={isLogoutModalVisible}
                onCancel={() => setLogoutModalVisible(false)}
                onConfirm={handleLogout}
                message="Are you sure you want to logout this account?"
                confirmText="Logout"
                cancelText="Cancel"
                icon="exit-outline"
            />

            {/* Rate Us Modal */}
            {isRateUsModalVisible && (
                <View style={styles.modalOverlay}>
                    <View className="bg-gray-900 rounded-lg mx-6 p-6">
                        <View className="items-center mb-4">
                            <Ionicons
                                name="star-outline"
                                size={40}
                                color="#14b8a6"
                            />
                        </View>
                        <Text className="text-white font-bold text-lg text-center mb-2">
                            Do you like our app?
                        </Text>
                        <Text className="text-gray-400 text-center mb-6">
                            Give us a quick rating so we know if you like it!
                        </Text>
                        <View className="flex-row justify-center mb-6">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <TouchableOpacity
                                    key={value}
                                    onPress={() => setRating(value)}
                                    className="mx-1"
                                >
                                    <Ionicons
                                        name={
                                            value <= rating
                                                ? 'star'
                                                : 'star-outline'
                                        }
                                        size={32}
                                        color={
                                            value <= rating
                                                ? '#14b8a6'
                                                : '#666666'
                                        }
                                    />
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View className="flex-row justify-between">
                            <TouchableOpacity
                                onPress={() => setRateUsModalVisible(false)}
                                className="flex-1 bg-gray-700 py-3 mr-2 rounded-lg items-center"
                            >
                                <Text className="text-gray-400 font-bold">
                                    Later
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handleRatingSubmit}
                                disabled={rating === 0}
                                className={`flex-1 py-3 rounded-lg items-center ${
                                    rating === 0
                                        ? 'bg-teal-500/50'
                                        : 'bg-teal-500'
                                }`}
                            >
                                <Text className="text-white font-bold">
                                    Submit
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
    },
});
