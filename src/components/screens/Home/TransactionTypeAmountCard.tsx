import { View, Text } from 'react-native';
import React from 'react';

interface TransactionTypeAmountCardProps {
    type: string;
    amount: string;
}

export default function TransactionTypeAmountCard({
    type,
    amount,
}: TransactionTypeAmountCardProps) {
    return (
        <View className="bg-gray-800 rounded-md p-4 flex-1 mx-1">
            <Text className="text-gray-400 text-sm">{type}</Text>
            <Text className="text-white text-lg font-bold">{amount}</Text>
        </View>
    );
}
