import { View, Text } from 'react-native';
import React from 'react';

interface TransactionDetailItemProps {
    title: string;
    value: string;
}

export default function TransactionDetailItem({
    title,
    value,
}: TransactionDetailItemProps) {
    return (
        <View className="gap-y-2 border-b border-gray-800 py-3">
            <Text className="text-white text-lg font-semibold">{title}</Text>
            <Text className="text-base text-gray-400">{value}</Text>
        </View>
    );
}
