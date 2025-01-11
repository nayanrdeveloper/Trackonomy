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
import PrimaryInput from '@/src/components/common/PrimaryInput';
import DateTimePickerModal from '@/src/components/common/modals/DateTimePickerModal';
import CategoryPickerModal, {
    Category,
} from '@/src/components/common/modals/CategoryPickerModal';

export default function AddExpenseScreen() {
    const router = useRouter();
    const [amount, setAmount] = useState('');
    const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
    const [category, setCategory] = useState<Category | null>(null);
    const [date, setDate] = useState(new Date('2024-07-12'));
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

    const openDatePicker = () => setDatePickerVisible(true);
    const closeDatePicker = () => setDatePickerVisible(false);

    const handleDateConfirm = (selectedDate: Date) => {
        setDate(selectedDate);
        closeDatePicker();
    };

    const handleCategorySelect = (selectedCategory: Category) => {
        setCategory(selectedCategory);
        setCategoryModalVisible(false);
        // Optionally, you can pass data back or perform additional actions
    };

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
            <CategoryPickerModal
                visible={isCategoryModalVisible}
                onCancel={() => setCategoryModalVisible(false)}
                onSelect={handleCategorySelect}
                selectedCategoryId={category?.id}
            />
            {/* Content */}
            <View className="flex-1 mt-6">
                <PrimaryInput
                    onChangeText={setAmount}
                    placeholder="Enter Title"
                    value={amount}
                    label="Title"
                    placeholderTextColor="#A0AEC0"
                />
                <PrimaryInput
                    onChangeText={setAmount}
                    placeholder="Enter Amount"
                    value={amount}
                    keyboardType="numeric"
                    label="Transaction amount"
                    placeholderTextColor="#A0AEC0"
                />

                {/* Transaction Category */}
                <View className="mb-4">
                    <Text className="text-gray-400 text-sm mb-2">
                        Transaction Category
                    </Text>
                    <TouchableOpacity
                        onPress={() => setCategoryModalVisible(true)}
                        className="bg-gray-800 rounded-md px-4 py-3 flex-row items-center justify-between"
                    >
                        <View className="flex-row items-center">
                            {category && (
                                <Ionicons
                                    name={category.icon as any}
                                    size={24}
                                    className="text-white mr-2"
                                />
                            )}
                            <Text className="text-white">
                                {category ? category.name : 'Choose a category'}
                            </Text>
                        </View>
                        <Ionicons
                            name="chevron-down-outline"
                            size={24}
                            className="text-gray-400"
                        />
                    </TouchableOpacity>
                </View>

                <View className="mb-4">
                    <Text className="text-gray-400 text-sm mb-2">
                        Transaction Date
                    </Text>
                    <TouchableOpacity
                        onPress={() => setDatePickerVisible(true)} // Open Date Picker
                        className="bg-gray-800 rounded-md px-4 py-3"
                    >
                        <Text className="text-white">
                            {date.toDateString()}
                        </Text>
                    </TouchableOpacity>
                </View>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    value={date}
                    onConfirm={handleDateConfirm}
                    onCancel={closeDatePicker}
                />

                <PrimaryInput
                    onChangeText={setAmount}
                    placeholder="Enter Amount"
                    value={amount}
                    keyboardType="numeric"
                    label="Description"
                    multiline
                    placeholderTextColor="#A0AEC0"
                />

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
