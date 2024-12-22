import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

export default function HomeScreen() {
    const router = useRouter();
    type Transaction = {
        id: string;
        title: string;
        category: string;
        amount: string;
        color: string;
        icon:
            | 'fast-food-outline'
            | 'wallet-outline'
            | 'tv-outline'
            | 'trending-up-outline';
    };

    const transactions: Transaction[] = [
        {
            id: '1',
            title: 'Food',
            category: 'Expense',
            amount: '- $50.00',
            color: 'red',
            icon: 'fast-food-outline',
        },
        {
            id: '2',
            title: 'Salary',
            category: 'Income',
            amount: '+ $200.00',
            color: 'teal',
            icon: 'wallet-outline',
        },
        {
            id: '3',
            title: 'Entertainment',
            category: 'Expense',
            amount: '- $40.00',
            color: 'red',
            icon: 'tv-outline',
        },
        {
            id: '4',
            title: 'Investment',
            category: 'Income',
            amount: '+ $100.00',
            color: 'teal',
            icon: 'trending-up-outline',
        },
    ];

    return (
        <View className="flex-1 bg-darkBg px-4 pt-10">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-6">
                <View className="flex-row items-center">
                    <Image
                        source={{ uri: 'https://via.placeholder.com/50' }}
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <View>
                        <Text className="text-white text-lg font-bold">
                            Hi, Darshan
                        </Text>
                        <Text className="text-gray-400 text-sm">
                            Good morning
                        </Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Ionicons
                        name="person-circle-outline"
                        size={28}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>
            </View>

            {/* Stats */}
            <Text className="text-white text-lg font-bold mb-4">
                This month
            </Text>
            <View className="flex-row justify-between mb-6">
                <View className="bg-gray-800 rounded-md p-4 flex-1 mx-1">
                    <Text className="text-gray-400 text-sm">Income</Text>
                    <Text className="text-white text-lg font-bold">
                        $500.00
                    </Text>
                </View>
                <View className="bg-gray-800 rounded-md p-4 flex-1 mx-1">
                    <Text className="text-gray-400 text-sm">Expense</Text>
                    <Text className="text-white text-lg font-bold">
                        $500.00
                    </Text>
                </View>
                <View className="bg-gray-800 rounded-md p-4 flex-1 mx-1">
                    <Text className="text-gray-400 text-sm">Total Balance</Text>
                    <Text className="text-white text-lg font-bold">
                        $500.00
                    </Text>
                </View>
            </View>

            {/* Recent Transactions */}
            <View>
                <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-white text-lg font-bold">
                        Recent Transactions
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            router.push('/transactions');
                        }}
                    >
                        <Text className="text-teal-400 text-sm font-bold">
                            View all
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={transactions}
                    renderItem={({ item }) => (
                        <View className="flex-row justify-between items-center bg-gray-800 rounded-md p-4 mb-3">
                            <Ionicons
                                name={item.icon}
                                size={28}
                                color={item.color}
                            />
                            <View className="flex-1 mx-4">
                                <Text className="text-white text-sm font-bold">
                                    {item.title}
                                </Text>
                                <Text className="text-gray-400 text-xs">
                                    {item.category}
                                </Text>
                            </View>
                            <Text
                                className={`text-sm font-bold ${item.color === 'red' ? 'text-red-400' : 'text-teal-400'}`}
                            >
                                {item.amount}
                            </Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>

            {/* Floating Action Button */}
            <TouchableOpacity className="absolute bottom-6 right-6 bg-teal-400 w-14 h-14 rounded-full items-center justify-center">
                <Ionicons name="add" size={28} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    );
}
