import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import DropdownMenu from '@/src/components/common/DropdownMenu';
import { useRouter } from 'expo-router';
import BudgetEmptyState from '@/src/components/screens/BudgetEmptyState';
import { Ionicons } from '@expo/vector-icons';
import BudgetCard from '@/src/components/screens/BudgetCard';

const budgets = [
    {
        id: 1,
        title: 'Home',
        totalAmount: '1500.00',
        spentAmount: '350.00',
        remainingAmount: '1150.00',
    },
    {
        id: 2,
        title: 'Grocery',
        totalAmount: '1000.00',
        spentAmount: '600.00',
        remainingAmount: '400.00',
    },
    {
        id: 3,
        title: 'Shopping',
        totalAmount: '800.00',
        spentAmount: '300.00',
        remainingAmount: '500.00',
    },
];

export default function BudgetListScreen() {
    const router = useRouter();
    const [menuVisible, setMenuVisible] = useState(false);
    const [selectedBudget, setSelectedBudget] = useState<number | null>(null);

    const handleMenuPress = (budgetId: number) => {
        setSelectedBudget(budgetId);
        setMenuVisible(true);
    };

    const handleEdit = () => {
        setMenuVisible(false);
        router.push('/addeditbudget');
    };

    const handleDelete = () => {
        setMenuVisible(false);
        console.log('Delete budget:', selectedBudget);
    };

    if (budgets.length === 0) {
        return (
            <BudgetEmptyState
                onSetBudget={() => router.push('/addeditbudget')}
            />
        );
    }

    return (
        <View className="flex-1 bg-darkBg px-4 pt-6">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-white font-bold text-lg">Budget</Text>
                <TouchableOpacity onPress={() => router.push('/addeditbudget')}>
                    <Ionicons
                        name="add-circle-outline"
                        size={28}
                        color="#14b8a6"
                    />
                </TouchableOpacity>
            </View>

            {/* Budget List */}
            <FlatList
                data={budgets}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <BudgetCard
                        title={item.title}
                        totalAmount={item.totalAmount}
                        spentAmount={item.spentAmount}
                        remainingAmount={item.remainingAmount}
                        onMenuPress={() => handleMenuPress(item.id)}
                    />
                )}
            />

            {/* Dropdown Menu */}
            <DropdownMenu
                visible={menuVisible}
                options={[
                    { label: 'Edit', onPress: handleEdit },
                    { label: 'Delete', onPress: handleDelete },
                ]}
                onClose={() => setMenuVisible(false)}
            />
        </View>
    );
}
