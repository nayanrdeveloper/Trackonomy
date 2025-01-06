import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import TopTabBar from '@/src/components/common/TopTabBar';
import PrimaryPieChart from '@/src/components/common/PrimaryPieChart';
import { Ionicons } from '@expo/vector-icons';

type TransactionType = 'All' | 'Income' | 'Expenses';

const transactionsData: Record<TransactionType, any> = {
    All: {
        chartData: [
            {
                name: 'Income',
                percentage: 20,
                color: '#14b8a6',
                value: '$2000.00',
            },
            {
                name: 'Expense',
                percentage: 80,
                color: '#e11d48',
                value: '$4000.00',
            },
        ],
        transactions: [
            {
                id: 1,
                title: 'Food',
                type: 'Expense',
                amount: '-$50.00',
                icon: 'fast-food-outline',
                color: '#e11d48',
            },
            {
                id: 2,
                title: 'Salary',
                type: 'Income',
                amount: '+$200.00',
                icon: 'wallet-outline',
                color: '#14b8a6',
            },
        ],
    },
    Income: {
        chartData: [
            {
                name: 'Salary',
                percentage: 100,
                color: '#14b8a6',
                value: '$1500.00',
            },
        ],
        transactions: [
            {
                id: 1,
                title: 'Salary',
                type: 'Income',
                amount: '+$200.00',
                icon: 'wallet-outline',
                color: '#14b8a6',
            },
        ],
    },
    Expenses: {
        chartData: [
            {
                name: 'Food',
                percentage: 100,
                color: '#e11d48',
                value: '$1500.00',
            },
        ],
        transactions: [
            {
                id: 1,
                title: 'Food',
                type: 'Expense',
                amount: '-$50.00',
                icon: 'fast-food-outline',
                color: '#e11d48',
            },
        ],
    },
};

export default function TransactionDashboard() {
    const [selectedTab, setSelectedTab] = useState<TransactionType>('All');

    return (
        <View className="flex-1 bg-[#212129]">
            {/* Top Tab Bar */}
            <TopTabBar
                selectedTab={selectedTab}
                onTabChange={(tab) => setSelectedTab(tab)}
                tabs={[
                    { label: 'All', value: 'All' },
                    { label: 'Income', value: 'Income' },
                    { label: 'Expenses', value: 'Expenses' },
                ]}
            />

            {/* Chart Section */}
            <View className="items-center my-6">
                <Text className="text-white font-bold text-xl mb-4">
                    July 2024
                </Text>
                <PrimaryPieChart
                    data={transactionsData[selectedTab].chartData}
                />
            </View>

            {/* Transactions List */}
            <FlatList
                data={transactionsData[selectedTab].transactions}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View className="flex-row justify-between items-center bg-gray-800 p-4 rounded-lg mb-4">
                        <View className="flex-row items-center">
                            <Ionicons
                                name={item.icon as any}
                                size={28}
                                color={item.color}
                            />
                            <View className="ml-4">
                                <Text className="text-white font-bold">
                                    {item.title}
                                </Text>
                                <Text className="text-gray-400 text-sm">
                                    {item.type}
                                </Text>
                            </View>
                        </View>
                        <Text
                            className={`font-bold ${item.type === 'Expense' ? 'text-red-500' : 'text-teal-500'}`}
                        >
                            {item.amount}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}
