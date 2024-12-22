import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, FlatList } from "react-native";
import { useRouter } from "expo-router"; // Expo Router for navigation
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons

const icons: { id: string; name: "cash-outline" | "card-outline" | "logo-paypal" | "wallet-outline" | "business-outline" | "home-outline" | "analytics-outline" | "speedometer-outline" | "flame-outline" | "megaphone-outline" | "build-outline" | "checkmark-circle-outline" }[] = [
    { id: "1", name: "cash-outline" },
    { id: "2", name: "card-outline" },
    { id: "3", name: "logo-paypal" },
    { id: "4", name: "wallet-outline" },
    { id: "5", name: "business-outline" },
    { id: "6", name: "home-outline" },
    { id: "7", name: "analytics-outline" },
    { id: "8", name: "speedometer-outline" },
    { id: "9", name: "flame-outline" },
    { id: "10", name: "megaphone-outline" },
    { id: "11", name: "build-outline" },
    { id: "12", name: "checkmark-circle-outline" },
  ]

export default function AddAccount() {
  const router = useRouter();
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [icon, setIcon] = useState("Select icon");
  const [selectedIcon, setSelectedIcon] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const handleIconSelect = (icon: string) => {
    setSelectedIcon(icon);
    setModalVisible(false); // Close modal after selection
  };

  const handleAddAccount = () => {
    if (!accountName || !amount || icon === "Select icon") {
      alert("Please fill out all fields");
      return;
    }

    // Navigate back to edit-transaction with the new account details
    router.replace({
      pathname: "/editTransaction",
      params: { newAccount: accountName, newAmount: amount, newIcon: icon },
    });
  };

  return (
    <View className="flex-1 bg-darkBg px-4 pt-6">
      {/* Header */}
      <View className="flex-row items-center mb-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-teal-500 text-lg">←</Text>
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold ml-4">Add Account</Text>
      </View>

      {/* Account Name */}
      <View className="mb-4">
        <Text className="text-gray-400 text-sm mb-2">Account Name</Text>
        <TextInput
          value={accountName}
          onChangeText={setAccountName}
          placeholder="Enter Account Name"
          placeholderTextColor="#A0AEC0"
          className="bg-gray-800 text-white px-4 py-3 rounded-md"
        />
      </View>

      {/* Amount */}
      <View className="mb-4">
        <Text className="text-gray-400 text-sm mb-2">Amount</Text>
        <TextInput
          value={amount}
          onChangeText={setAmount}
          placeholder="Enter Amount"
          keyboardType="numeric"
          placeholderTextColor="#A0AEC0"
          className="bg-gray-800 text-white px-4 py-3 rounded-md"
        />
      </View>

      {/* Select Icon */}
      <View className="mb-6">
        <Text className="text-gray-400 text-sm mb-2">Select Icon</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)} // Open Modal
          className="bg-gray-800 px-4 py-3 rounded-md"
        >
          <Text className="text-white">{selectedIcon ? selectedIcon : "Select Icon"}</Text>
        </TouchableOpacity>
      </View>

      {/* Add Button */}
      <TouchableOpacity
        onPress={handleAddAccount}
        className="bg-teal-500 rounded-md py-4"
      >
        <Text className="text-center text-white font-bold text-lg">Add</Text>
      </TouchableOpacity>

      <Modal
        transparent
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 bg-black/50 justify-center items-center">
          <View className="bg-gray-900 rounded-lg p-6 w-4/5">
            <Text className="text-white text-lg font-bold mb-4">Select Icon</Text>
            <FlatList
              data={icons}
              numColumns={4}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleIconSelect(item.name)}
                  className="flex-1 items-center justify-center m-2"
                >
                  <Ionicons
                    name={item.name}
                    size={32}
                    className={`${
                      selectedIcon === item.name ? "text-teal-500" : "text-gray-400"
                    }`}
                  />
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="bg-teal-500 rounded-md mt-4 py-3"
            >
              <Text className="text-center text-white font-bold">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
