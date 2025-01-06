import React, { useState } from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DateTimePickerModalProps {
    isVisible: boolean;
    mode?: 'date' | 'time';
    value: Date;
    onConfirm: (date: Date) => void;
    onCancel: () => void;
}

const DateTimePickerModal: React.FC<DateTimePickerModalProps> = ({
    isVisible,
    mode = 'date',
    value,
    onConfirm,
    onCancel,
}) => {
    const [selectedDate, setSelectedDate] = useState(value);

    const handleDateChange = (event: any, date?: Date) => {
        if (date) {
            setSelectedDate(date);
        }
    };

    const handleConfirm = () => {
        onConfirm(selectedDate);
    };

    if (!isVisible) return null;

    if (Platform.OS === 'android') {
        return (
            <DateTimePicker
                value={selectedDate}
                mode={mode}
                display="default"
                onChange={(event, date) => {
                    if (event.type === 'set') {
                        onConfirm(date || selectedDate);
                    } else {
                        onCancel();
                    }
                }}
            />
        );
    }

    return (
        <Modal transparent animationType="slide" visible={isVisible}>
            <View style={styles.modalOverlay}>
                <View className="bg-gray-900 rounded-t-lg p-6">
                    <Text className="text-white text-lg font-bold mb-4">
                        {mode === 'date' ? 'Select Date' : 'Select Time'}
                    </Text>
                    <DateTimePicker
                        value={selectedDate}
                        mode={mode}
                        display="spinner"
                        onChange={handleDateChange}
                    />
                    <View className="flex-row justify-between mt-6">
                        <TouchableOpacity onPress={onCancel}>
                            <Text className="text-gray-400 font-bold text-lg">
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleConfirm}>
                            <Text className="text-teal-500 font-bold text-lg">
                                OK
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'flex-end',
    },
});

export default DateTimePickerModal;
