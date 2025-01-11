import DateTimePickerModal from '@/src/components/common/modals/DateTimePickerModal';
import PrimaryInput from '@/src/components/common/PrimaryInput';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import { useSearchParams } from 'expo-router/build/hooks';
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal,
    StyleSheet,
    Platform,
} from 'react-native';

export default function EditTransaction() {
    const router = useRouter();
    const [isModalVisible, setModalVisible] = useState(false);
    const [amount, setAmount] = useState('$50');
    const [description, setDescription] = useState(
        'Lunch with friends am at subway',
    );
    const [category, setCategory] = useState('Food');
    const [type, setType] = useState('Expense');
    const [date, setDate] = useState(new Date('2024-07-12'));
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [account, setAccount] = useState('Cash');
    const [accounts, setAccounts] = useState([
        { name: 'Cash', amount: '$100.00', icon: 'cash-outline' },
        { name: 'SBI Card', amount: '$200.00', icon: 'card-outline' },
    ]);
    const params = useSearchParams();

    const handleSelectType = (selectedType: string) => {
        setType(selectedType);
        setModalVisible(false); // Close modal after selection
    };

    const openDatePicker = () => setDatePickerVisible(true);
    const closeDatePicker = () => setDatePickerVisible(false);

    const handleDateConfirm = (selectedDate: Date) => {
        setDate(selectedDate);
        closeDatePicker();
    };

    interface DatePickerEvent {
        type: string;
        nativeEvent: {
            timestamp: number;
        };
    }

    const handleConfirm = (
        event: DatePickerEvent,
        selectedDate?: Date | undefined,
    ) => {
        if (Platform.OS === 'android') {
            setDatePickerVisible(false); // Close picker after date selection
        }
        if (selectedDate) {
            setDate(new Date(selectedDate)); // Update date state
        }
    };

    // const accounts = [
    //   { id: "1", name: "Cash", icon: "cash-outline" },
    //   { id: "2", name: "SBI Card", icon: "card-outline" },
    //   { id: "3", name: "HDFC Card", icon: "card-outline" },
    // ];

    React.useEffect(() => {
        const selectedCategory = params.get('selectedCategory');
        if (selectedCategory) {
            setCategory(selectedCategory); // Update the category with the selected value
        }
    }, [params.get('selectedCategory')]);

    React.useEffect(() => {
        const newAccount = params.get('newAccount');
        const newAmount = params.get('newAmount');
        const newIcon = params.get('newIcon');
        if (newAccount) {
            // Add the new account to the list
            setAccounts((prev) => [
                ...prev,
                {
                    name: newAccount,
                    amount: `$${newAmount}`,
                    icon: newIcon || 'cash-outline',
                },
            ]);
        }
    }, [params]);

    return (
        <View className="flex-1 bg-darkBg px-4 pt-6">
            {/* Header */}
            <View className="flex-row items-center mb-6">
                <TouchableOpacity>
                    <Ionicons
                        name="arrow-back-outline"
                        size={28}
                        className="text-white"
                    />
                </TouchableOpacity>
                <Text className="text-white text-lg font-bold ml-4">
                    Edit Transaction
                </Text>
            </View>

            {/* Form */}
            <View>
                {/* Transaction Amount */}
                <View className="mb-4">
                    <Text className="text-gray-400 text-sm mb-2">
                        Transaction Amount
                    </Text>
                    <TextInput
                        value={amount}
                        onChangeText={setAmount}
                        className="bg-gray-800 text-white px-4 py-3 rounded-md"
                    />
                </View>

                {/* Transaction Category */}
                <View className="mb-4">
                    <Text className="text-gray-400 text-sm mb-2">
                        Transaction Category
                    </Text>
                    <TouchableOpacity
                        onPress={() => router.push(`/SelectCategory`)}
                        className="bg-gray-800 rounded-md px-4 py-3"
                    >
                        <Text className="text-white">{category}</Text>
                    </TouchableOpacity>
                </View>

                {/* Transaction Type */}
                <View className="mb-4">
                    <Text className="text-gray-400 text-sm mb-2">
                        Transaction Type
                    </Text>
                    <TouchableOpacity
                        onPress={() => setModalVisible(true)} // Open bottom modal
                        className="bg-gray-800 rounded-md px-4 py-3"
                    >
                        <Text className="text-white">{type}</Text>
                    </TouchableOpacity>
                </View>

                <Modal
                    transparent
                    visible={isModalVisible}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View className="bg-gray-900 rounded-t-lg p-6">
                            <Text className="text-white text-lg font-bold mb-4">
                                Transaction Type
                            </Text>
                            <View className="flex-row justify-around">
                                {/* Income Button */}
                                <TouchableOpacity
                                    onPress={() => handleSelectType('Income')}
                                    className={`flex-1 mx-2 items-center p-4 rounded-lg border ${
                                        type === 'Income'
                                            ? 'border-teal-500'
                                            : 'border-gray-600'
                                    }`}
                                >
                                    <Ionicons
                                        name="arrow-up-circle-outline"
                                        size={32}
                                        className={
                                            type === 'Income'
                                                ? 'text-teal-500'
                                                : 'text-gray-400'
                                        }
                                    />
                                    <Text
                                        className={`mt-2 font-bold ${
                                            type === 'Income'
                                                ? 'text-teal-500'
                                                : 'text-gray-400'
                                        }`}
                                    >
                                        Income
                                    </Text>
                                </TouchableOpacity>

                                {/* Expense Button */}
                                <TouchableOpacity
                                    onPress={() => handleSelectType('Expense')}
                                    className={`flex-1 mx-2 items-center p-4 rounded-lg border ${
                                        type === 'Expense'
                                            ? 'border-red-500'
                                            : 'border-gray-600'
                                    }`}
                                >
                                    <Ionicons
                                        name="arrow-down-circle-outline"
                                        size={32}
                                        className={
                                            type === 'Expense'
                                                ? 'text-red-500'
                                                : 'text-gray-400'
                                        }
                                    />
                                    <Text
                                        className={`mt-2 font-bold ${
                                            type === 'Expense'
                                                ? 'text-red-500'
                                                : 'text-gray-400'
                                        }`}
                                    >
                                        Expense
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/* Transaction Date */}
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

                <View className="mb-4">
                    <Text className="text-gray-400 text-sm mb-2">
                        Description
                    </Text>
                    <PrimaryInput
                        onChangeText={setDescription}
                        value={description}
                        multiline={true}
                        placeholder="Enter description"
                    />
                </View>

                {/* Transaction Account */}
                <View className="mb-6">
                    <View className="flex-row justify-between mb-2">
                        <Text className="text-gray-400 text-sm">
                            Transaction Account
                        </Text>
                        <TouchableOpacity
                            onPress={() => router.push('/addAccount')}
                        >
                            <Text className="text-teal-500 text-sm font-bold">
                                Add Account
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row space-x-4">
                        {accounts.map((account, index) => (
                            <TouchableOpacity
                                key={index}
                                className="flex-1 items-center py-4 rounded-lg bg-gray-800"
                            >
                                <Text className="text-white text-lg font-bold">
                                    {account.name}
                                </Text>
                                <Text className="text-gray-400 text-sm">
                                    {account.amount}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Update Button */}
                <TouchableOpacity className="bg-teal-500 rounded-md py-4">
                    <Text className="text-center text-white font-bold text-lg">
                        Update
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'flex-end',
    },
});
