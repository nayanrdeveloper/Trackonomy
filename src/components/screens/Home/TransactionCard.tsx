import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ITransaction {
    icon: keyof typeof Ionicons.glyphMap;
    color: string;
    title: string; // Transaction title
    category: string; // Transaction category
    expenseType: string; // Expense or Income type
    amount: string;
}

interface TransactionCardProps {
    transaction: ITransaction;
    onPress: () => void;
}

export default function TransactionCard({
    transaction,
    onPress,
}: TransactionCardProps) {
    const { title, category, expenseType, amount, color, icon } = transaction;

    return (
        <TouchableOpacity
            onPress={onPress}
            className="flex-row justify-between items-center bg-gray-800 rounded-md p-4 mb-3"
        >
            <Ionicons name={icon} size={28} color={color} />
            <View className="flex-1 mx-4">
                <Text className="text-white text-sm font-bold">{title}</Text>
                <Text className="text-gray-400 text-xs">{category}</Text>
                {/* <Text className="text-gray-400 text-xs">{expenseType}</Text> */}
            </View>
            <Text
                className={`${color === 'teal' ? 'text-teal-500' : 'text-red-400'} text-sm font-bold`}
            >
                {amount}
            </Text>
        </TouchableOpacity>
    );
}
