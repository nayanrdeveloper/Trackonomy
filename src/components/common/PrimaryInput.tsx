import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

interface InputProps {
    label?: string;
    placeholder: string;
    placeholderTextColor?: string;
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    secureTextEntry?: boolean;
    errorMessage?: string;
    editable?: boolean;
    multiline?: boolean;
    maxLength?: number;
}

const PrimaryInput: React.FC<InputProps> = ({
    label,
    placeholder,
    placeholderTextColor = '#A0AEC0',
    value,
    onChangeText,
    keyboardType = 'default',
    secureTextEntry = false,
    errorMessage,
    editable = true,
    multiline = false,
    maxLength,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View className="mb-4">
            {label && (
                <Text className="text-white font-bold mb-2">{label}</Text>
            )}
            <TextInput
                className={`bg-gray-700 text-white text-base rounded-xl px-4 py-3 ${
                    errorMessage
                        ? 'border border-red-500' // Error state
                        : isFocused
                          ? 'border border-teal-400' // Focus state
                          : '' // Default state (no border)
                }`}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                editable={editable}
                multiline={multiline}
                maxLength={maxLength}
                onFocus={() => setIsFocused(true)} // Set focus state
                onBlur={() => setIsFocused(false)} // Reset focus state
            />
            {errorMessage && (
                <Text className="text-red-500 text-sm mt-1">
                    {errorMessage}
                </Text>
            )}
        </View>
    );
};

export default PrimaryInput;
