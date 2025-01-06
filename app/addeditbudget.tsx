import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import PrimaryButton from '@/src/components/common/PrimaryButton';

export default function SetBudgetScreen() {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');

    const handleSetBudget = () => {
        if (!amount || !category) {
            console.log('All fields are required');
            return;
        }
        console.log('Set Budget:', { amount, category });
    };

    return (
        <View className="flex-1 bg-darkBg px-4 pt-6">
            {/* Header */}
            <Text className="text-white text-lg font-bold mb-6">
                Set Budget
            </Text>

            {/* Form */}
            <View>
                <Text className="text-gray-400 mb-2">Budget Amount</Text>
                <TextInput
                    value={amount}
                    onChangeText={setAmount}
                    placeholder="Enter Amount"
                    placeholderTextColor="#A0AEC0"
                    className="bg-gray-800 text-white rounded-md px-4 py-3 mb-4"
                />

                <Text className="text-gray-400 mb-2">Budget Category</Text>
                <TextInput
                    value={category}
                    onChangeText={setCategory}
                    placeholder="Select Category"
                    placeholderTextColor="#A0AEC0"
                    className="bg-gray-800 text-white rounded-md px-4 py-3 mb-6"
                />

                <PrimaryButton title="Set Budget" onPress={handleSetBudget} />
            </View>
        </View>
    );
}
