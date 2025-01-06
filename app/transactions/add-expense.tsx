import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AddExpenseScreen() {
    const router = useRouter();
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('23 Jul, 2024'); // Default date
    const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

    const accounts = [
        { id: '1', name: 'Cash', icon: 'cash-outline' },
        { id: '2', name: 'SBI Card', icon: 'card-outline' },
        { id: '3', name: 'HDFC Card', icon: 'card-outline' },
    ];

    const handleAddTransaction = () => {
        if (!amount || !category || !selectedAccount) {
            alert('Please fill all the fields.');
            return;
        }

        // API Call or Further Logic
        console.log({
            amount,
            category,
            date,
            account: selectedAccount,
        });
        router.back(); // Navigate back after adding
    };

    return (
        <View className="flex-1 bg-darkBg px-4">
            {/* Content */}
            <View className="flex-1 mt-6">
                {/* Transaction Amount */}
                <View className="mb-4">
                    <Text className="text-gray-300 mb-2">
                        Transaction amount
                    </Text>
                    <TextInput
                        className="bg-gray-800 text-white rounded-lg px-4 py-3"
                        placeholder="Enter Amount"
                        placeholderTextColor="#A0AEC0"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                    />
                </View>

                {/* Transaction Category */}
                <View className="mb-4">
                    <Text className="text-gray-300 mb-2">
                        Transaction category
                    </Text>
                    <TouchableOpacity
                        className="bg-gray-800 flex-row justify-between items-center rounded-lg px-4 py-3"
                        onPress={() => alert('Select category action')}
                    >
                        <Text className="text-white">
                            {category || 'Select Category'}
                        </Text>
                        <Ionicons
                            name="chevron-down-outline"
                            size={20}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>

                {/* Transaction Date */}
                <View className="mb-4">
                    <Text className="text-gray-300 mb-2">Transaction date</Text>
                    <TouchableOpacity
                        className="bg-gray-800 flex-row justify-between items-center rounded-lg px-4 py-3"
                        onPress={() => alert('Date picker action')}
                    >
                        <Text className="text-white">{date}</Text>
                        <Ionicons
                            name="calendar-outline"
                            size={20}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>

                {/* Transaction Account */}
                <View className="mb-4">
                    <View className="flex-row justify-between mb-2">
                        <Text className="text-gray-300">
                            Transaction account
                        </Text>
                        <TouchableOpacity
                            onPress={() => alert('Add account action')}
                        >
                            <Text className="text-teal-400 font-bold">
                                Add account
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal
                        data={accounts}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                className={`flex-1 items-center justify-center mx-2 p-4 rounded-lg ${
                                    selectedAccount === item.id
                                        ? 'bg-teal-400'
                                        : 'bg-gray-800'
                                }`}
                                onPress={() => setSelectedAccount(item.id)}
                            >
                                <Ionicons
                                    name={item.icon as any}
                                    size={24}
                                    color={
                                        selectedAccount === item.id
                                            ? 'white'
                                            : 'gray'
                                    }
                                />
                                <Text
                                    className={`mt-2 font-bold ${
                                        selectedAccount === item.id
                                            ? 'text-white'
                                            : 'text-gray-400'
                                    }`}
                                >
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>

            {/* Add Button */}
            <View className="mt-4">
                <TouchableOpacity
                    className="bg-teal-400 py-4 rounded-lg"
                    onPress={handleAddTransaction}
                >
                    <Text className="text-center text-white font-bold">
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
