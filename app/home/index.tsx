import TransactionCard from '@/src/components/screens/Home/TransactionCard';
import TransactionTypeAmountCard from '@/src/components/screens/Home/TransactionTypeAmountCard';
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
        expenseType: string;
        description: string;
        icon:
            | 'fast-food-outline'
            | 'wallet-outline'
            | 'tv-outline'
            | 'trending-up-outline';
    };

    const transactions: Transaction[] = [
        {
            id: '1',
            title: 'Lunch at Subway', // Transaction title
            category: 'Food', // Category of the transaction
            expenseType: 'Expense', // Expense or Income type
            amount: '- $50.00',
            color: 'red',
            description: 'Lunch with friends am at subway',
            icon: 'fast-food-outline',
        },
        {
            id: '2',
            title: 'Monthly Salary', // Transaction title
            category: 'Salary', // Category of the transaction
            expenseType: 'Income', // Expense or Income type
            amount: '+ $200.00',
            color: 'teal',
            description: 'Monthly salary from company',
            icon: 'wallet-outline',
        },
        {
            id: '3',
            title: 'Netflix Subscription', // Transaction title
            category: 'Entertainment', // Category of the transaction
            expenseType: 'Expense', // Expense or Income type
            amount: '- $40.00',
            color: 'red',
            description: 'Monthly subscription of netflix',
            icon: 'tv-outline',
        },
        {
            id: '4',
            title: 'Stock Returns', // Transaction title
            category: 'Investment', // Category of the transaction
            expenseType: 'Income', // Expense or Income type
            amount: '+ $100.00',
            color: 'teal',
            description: 'Stock returns from investment',
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
                <TransactionTypeAmountCard amount={'$500.00'} type={'Income'} />
                <TransactionTypeAmountCard
                    amount={'$500.00'}
                    type={'Expense'}
                />
                <TransactionTypeAmountCard amount={'$500.00'} type={'Total'} />
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
                        <TransactionCard
                            transaction={item}
                            onPress={() => {
                                router.push('/transactionsDetails');
                            }}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View className="h-2" />}
                />
            </View>

            {/* Floating Action Button */}
            <TouchableOpacity className="absolute bottom-6 right-6 bg-teal-400 w-14 h-14 rounded-full items-center justify-center">
                <Ionicons name="add" size={28} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    );
}
