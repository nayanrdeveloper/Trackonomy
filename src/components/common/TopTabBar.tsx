import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

interface TopTabBarProps<T> {
    selectedTab: T;
    onTabChange: (tab: T) => void;
    tabs: { label: string; value: T }[];
}

const TopTabBar = <T extends string>({
    selectedTab,
    onTabChange,
    tabs,
}: TopTabBarProps<T>) => {
    return (
        <View className="flex-row justify-around bg-gray-800 p-2">
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab.value}
                    onPress={() => onTabChange(tab.value)}
                    className={`px-4 py-2 rounded-lg ${
                        selectedTab === tab.value ? 'bg-teal-500' : ''
                    }`}
                >
                    <Text
                        className={`text-sm font-bold ${
                            selectedTab === tab.value
                                ? 'text-white'
                                : 'text-gray-400'
                        }`}
                    >
                        {tab.label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default TopTabBar;
