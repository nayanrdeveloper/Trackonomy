import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    GestureResponderEvent,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ConfirmationModalProps {
    visible: boolean;
    onCancel: (event: GestureResponderEvent) => void;
    onConfirm: (event: GestureResponderEvent) => void;
    message: string;
    confirmText?: string;
    cancelText?: string;
    icon?: string; // Icon name is optional
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    visible,
    onCancel,
    onConfirm,
    message,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    icon,
}) => {
    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
            statusBarTranslucent
        >
            <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
                <View className="w-11/12 bg-gray-800 rounded-lg p-6">
                    {/* Optional Icon */}
                    {icon && (
                        <View className="items-center mb-4">
                            <View className="bg-gray-700 p-4 rounded-full">
                                <Ionicons
                                    name={icon as any}
                                    size={28}
                                    color="#14B8A6"
                                />
                            </View>
                        </View>
                    )}

                    {/* Message */}
                    <Text className="text-center text-white text-base mb-6">
                        {message}
                    </Text>

                    {/* Buttons */}
                    <View className="flex-row justify-between">
                        <TouchableOpacity
                            onPress={onCancel}
                            className="flex-1 mr-2 bg-gray-700 py-3 rounded-lg"
                        >
                            <Text className="text-center text-teal-400 font-bold">
                                {cancelText}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={onConfirm}
                            className="flex-1 ml-2 bg-teal-400 py-3 rounded-lg"
                        >
                            <Text className="text-center text-white font-bold">
                                {confirmText}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ConfirmationModal;
