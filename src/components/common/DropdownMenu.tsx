import React from 'react';
import { Modal, TouchableOpacity, View, Text, Dimensions } from 'react-native';

interface DropdownMenuProps {
    visible: boolean;
    options: { label: string; onPress: () => void }[];
    onClose: () => void;
}

const screenWidth = Dimensions.get('window').width;

const DropdownMenu: React.FC<DropdownMenuProps> = ({
    visible,
    options,
    onClose,
}) => {
    if (!visible) return null;

    return (
        <Modal transparent animationType="fade" visible={visible}>
            {/* Overlay */}
            <TouchableOpacity
                className="absolute inset-0 bg-black bg-opacity-50"
                activeOpacity={1}
                onPress={onClose}
            />
            {/* Dropdown Menu */}
            <View
                className={`absolute bg-[#1F1F29] rounded-lg overflow-hidden`}
                style={{ top: 100, right: 16, width: screenWidth * 0.5 }}
            >
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={option.onPress}
                        className={`p-3 border-b border-gray-700 ${
                            index === options.length - 1 ? 'border-b-0' : ''
                        }`}
                    >
                        <Text className="text-white text-base">
                            {option.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </Modal>
    );
};

export default DropdownMenu;
