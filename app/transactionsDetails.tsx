import TransactionDetailItem from '@/src/components/screens/Home/TransactionDetailItem';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

export default function TransactionDetail() {
    const router = useRouter();
    const [isModalVisible, setModalVisible] = useState(false);

    const handleDelete = () => {
        setModalVisible(false);
        alert('Transaction deleted successfully!'); // Replace with actual delete logic
    };
    return (
        <View className="flex-1 bg-darkBg px-4 pt-6">
            {/* Header */}
            <View className="flex-row items-center mb-4">
                <TouchableOpacity>
                    <Ionicons
                        name="arrow-back-outline"
                        size={28}
                        className="text-white"
                    />
                </TouchableOpacity>
                <Text className="text-white text-lg font-bold ml-4">
                    Transaction Detail
                </Text>
            </View>

            {/* Card */}
            <View className="bg-[#2C2C33] rounded-lg p-4 flex-row items-center justify-between mb-6">
                <View className="flex-row items-center">
                    <Ionicons
                        name="fast-food-outline"
                        size={32}
                        color={'white'}
                        className="text-white bg-[#36363D] p-3 rounded-lg"
                    />
                    <View className="ml-4">
                        <Text className="text-white text-lg font-bold">
                            Food
                        </Text>
                        <Text className="text-gray-400 text-sm">Expense</Text>
                    </View>
                </View>
                <View className="flex flex-row gap-x-3">
                    <TouchableOpacity
                        onPress={() => {
                            router.push('/editTransaction');
                        }}
                    >
                        <Ionicons
                            name="create-outline"
                            size={24}
                            color={'white'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Ionicons
                            name="trash-outline"
                            size={24}
                            color={'white'}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Details */}
            <View className="flex flex-col gap-y-4">
                <TransactionDetailItem
                    title="Transaction Type"
                    value="Expense"
                />
                <TransactionDetailItem
                    title="Transaction Category"
                    value="Food"
                />
                <TransactionDetailItem
                    title="Transaction Date"
                    value="12 Jan 2024"
                />
                <TransactionDetailItem
                    title="Transaction Account"
                    value="Cash"
                />
                <TransactionDetailItem title="Amount" value="$50.00" />
                <TransactionDetailItem
                    title="Description"
                    value="Lunch at Subway free treat for completing the project milestone with the team. Enjoyed a variety of sandwiches and drinks."
                />
            </View>

            <Modal
                transparent
                visible={isModalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View className="flex-1 bg-black/50 justify-center items-center">
                    <View className="bg-gray-900 rounded-lg p-6 w-4/5">
                        <Ionicons
                            name="trash-outline"
                            size={40}
                            className="text-red-500 self-center mb-4"
                        />
                        <Text className="text-white text-lg font-bold text-center mb-4">
                            Are you sure you want to delete this transaction?
                        </Text>
                        <View className="flex-row justify-between mt-6">
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                className="bg-gray-800 px-4 py-3 rounded-lg flex-1 mr-2"
                            >
                                <Text className="text-center text-gray-400 font-bold">
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handleDelete}
                                className="bg-red-500 px-4 py-3 rounded-lg flex-1 ml-2"
                            >
                                <Text className="text-center text-white font-bold">
                                    Delete
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
