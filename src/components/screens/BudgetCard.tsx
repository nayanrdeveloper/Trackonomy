import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface BudgetCardProps {
    title: string;
    totalAmount: string;
    spentAmount: string;
    remainingAmount: string;
    onMenuPress: () => void;
}

const BudgetCard: React.FC<BudgetCardProps> = ({
    title,
    totalAmount,
    spentAmount,
    remainingAmount,
    onMenuPress,
}) => {
    const spentPercentage =
        (parseFloat(spentAmount) / parseFloat(totalAmount)) * 100;

    return (
        <View className="bg-gray-800 p-4 rounded-lg mb-4">
            <View className="flex-row justify-between items-center mb-2">
                <Text className="text-white font-bold">{title}</Text>
                <TouchableOpacity onPress={onMenuPress}>
                    <Ionicons
                        name="ellipsis-vertical"
                        size={20}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
            <Text className="text-teal-500 font-bold mb-1">${totalAmount}</Text>
            <Text className="text-gray-400 text-sm">
                ${spentAmount} from ${totalAmount} - Remaining: $
                {remainingAmount}
            </Text>
            <View className="h-2 bg-gray-600 rounded-full mt-2">
                <View
                    style={{ width: `${spentPercentage}%` }}
                    className="h-2 bg-red-500 rounded-full"
                />
            </View>
        </View>
    );
};

export default BudgetCard;
