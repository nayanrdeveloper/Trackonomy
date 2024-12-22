import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

interface CommonButtonProps {
    title: string;
    onPress: () => void;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
}

const PrimaryButton: React.FC<CommonButtonProps> = ({
    title,
    onPress,
    isLoading = false,
    disabled = false,
    variant = 'primary',
    size = 'medium',
    icon,
}) => {
    const getButtonStyles = () => {
        const baseClasses = `flex-row items-center justify-center rounded-lg`;
        const variantClasses = {
            primary: `bg-teal-400`,
            secondary: `bg-gray-400`,
            outline: `border border-teal-400 bg-transparent`,
        };
        const sizeClasses = {
            small: `px-4 py-2`,
            medium: `px-6 py-3`,
            large: `px-8 py-4`,
        };
        const disabledClasses = disabled ? `opacity-50` : ``;

        return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`;
    };

    const getTextStyles = () => {
        const textStyles = {
            primary: `text-white font-bold text-base`,
            secondary: `text-black font-bold text-base`,
            outline: `text-teal-400 font-bold text-base`,
        };

        return textStyles[variant];
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || isLoading}
            className={getButtonStyles()}
        >
            {isLoading ? (
                <ActivityIndicator
                    color={variant === 'outline' ? '#14B8A6' : '#FFFFFF'}
                />
            ) : (
                <View className="flex-row items-center">
                    {icon && <View className="mr-2">{icon}</View>}
                    <Text className={getTextStyles()}>{title}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

export default PrimaryButton;
