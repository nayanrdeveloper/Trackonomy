import React from 'react';
import { View, Text, Image } from 'react-native';
import PrimaryButton from '../common/PrimaryButton';

interface BudgetEmptyStateProps {
    onSetBudget: () => void;
}

const BudgetEmptyState: React.FC<BudgetEmptyStateProps> = ({ onSetBudget }) => {
    return (
        <View className="flex-1 items-center justify-center">
            <Image
                source={require('@/assets/images/goal.png')}
                className="w-40 h-40 mb-4"
                resizeMode="contain"
            />
            <Text className="text-white text-lg font-bold mb-2">
                No Budget Set
            </Text>
            <Text className="text-gray-400 text-center mb-6">
                There is no budget set for this month. Please set your budget to
                track your expenses.
            </Text>
            <PrimaryButton title="Set Budget" onPress={onSetBudget} />
        </View>
    );
};

export default BudgetEmptyState;
