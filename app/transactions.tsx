import React from "react";
import { View, Text, FlatList, TouchableOpacity, Touchable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const transactions = [
  {
    id: "1",
    title: "Food",
    category: "Expense",
    amount: "-$50.00",
    color: "text-red-500",
    icon: "fast-food-outline",
  },
  {
    id: "2",
    title: "Salary",
    category: "Income",
    amount: "+$200.00",
    color: "text-teal-500",
    icon: "wallet-outline",
  },
  {
    id: "3",
    title: "Entertainment",
    category: "Expense",
    amount: "-$40.00",
    color: "text-red-500",
    icon: "tv-outline",
  },
  {
    id: "4",
    title: "Investment",
    category: "Income",
    amount: "+$100.00",
    color: "text-teal-500",
    icon: "trending-up-outline",
  },
  {
    id: "5",
    title: "Fitness",
    category: "Expense",
    amount: "-$100.00",
    color: "text-red-500",
    icon: "barbell-outline",
  },
  {
    id: "6",
    title: "Savings",
    category: "Income",
    amount: "+$150.00",
    color: "text-teal-500",
    icon: "piggy-bank-outline",
  },
  {
    id: "7",
    title: "Food",
    category: "Expense",
    amount: "-$150.00",
    color: "text-red-500",
    icon: "fast-food-outline",
  },
  {
    id: "8",
    title: "Investment",
    category: "Income",
    amount: "+$400.00",
    color: "text-teal-500",
    icon: "trending-up-outline",
  },
];

export default function RecentTransactions() {
  const router = useRouter()
  return (
    <View className="flex-1 bg-darkBg px-4 pt-6">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-white text-lg font-bold">Recent Transactions</Text>
        <TouchableOpacity>
          <Text className="text-teal-500 text-sm font-bold">View all</Text>
        </TouchableOpacity>
      </View>

      {/* Transaction List */}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {router.push('/transactionsDetails')}}>
          <View className="flex-row items-center bg-gray-800 rounded-lg p-4 mb-4">
            <Ionicons name={item.icon as any} size={28} className="text-white" />
            <View className="flex-1 mx-4">
              <Text className="text-white text-base font-bold">{item.title}</Text>
              <Text className="text-gray-400 text-sm">{item.category}</Text>
            </View>
            <Text className={`text-base font-bold ${item.color}`}>{item.amount}</Text>
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
