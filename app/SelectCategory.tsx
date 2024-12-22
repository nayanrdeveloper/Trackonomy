import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // Use router from Expo Router
import { Ionicons } from "@expo/vector-icons";

const categories: { id: string; name: string; icon: "person-circle-outline" | "fast-food-outline" | "cart-outline" | "airplane-outline" | "film-outline" | "car-outline" | "document-text-outline" | "medkit-outline" | "bus-outline" | "school-outline" | "home-outline" | "receipt-outline" | "pricetag-outline" | "briefcase-outline" | "cash-outline" }[] = [
  { id: "1", name: "Personal", icon: "person-circle-outline" },
  { id: "2", name: "Food & drink", icon: "fast-food-outline" },
  { id: "3", name: "Grocery", icon: "cart-outline" },
  { id: "4", name: "Travel", icon: "airplane-outline" },
  { id: "5", name: "Entertainment", icon: "film-outline" },
  { id: "6", name: "Fuel", icon: "car-outline" },
  { id: "7", name: "Bill", icon: "document-text-outline" },
  { id: "8", name: "Medical", icon: "medkit-outline" },
  { id: "9", name: "Transport", icon: "bus-outline" },
  { id: "10", name: "Education", icon: "school-outline" },
  { id: "11", name: "Home", icon: "home-outline" },
  { id: "12", name: "Loan paid", icon: "receipt-outline" },
  { id: "13", name: "Shopping", icon: "pricetag-outline" },
  { id: "14", name: "Office", icon: "briefcase-outline" },
  { id: "15", name: "Rent paid", icon: "cash-outline" },
];

export default function SelectCategory() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    router.replace({
      pathname: "/editTransaction",
      params: { selectedCategory: category }, // Pass selected category back
    });
  };

  return (
    <View className="flex-1 bg-darkBg px-4 pt-6">
      {/* Header */}
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={28} className="text-white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold ml-4">Select Category</Text>
      </View>

      {/* Category Grid */}
      <FlatList
        data={categories}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleSelect(item.name)}
            className={`flex-1 m-2 items-center justify-center p-4 rounded-lg ${
              selectedCategory === item.name ? "bg-teal-500" : "bg-gray-800"
            }`}
          >
            <Ionicons
              name={item.icon}
              size={28}
              className={`${
                selectedCategory === item.name ? "text-white" : "text-gray-400"
              }`}
            />
            <Text
              className={`mt-2 text-sm font-bold ${
                selectedCategory === item.name ? "text-white" : "text-gray-400"
              }`}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
}
