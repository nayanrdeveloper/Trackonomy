import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PrivacyPolicyScreen() {
    return (
        <View className="flex-1 bg-[#212129] px-4 pt-6">
            {/* Header */}
            <View className="flex-row items-center mb-6">
                <TouchableOpacity onPress={() => console.log('Go Back')}>
                    <Ionicons
                        name="arrow-back-outline"
                        size={28}
                        color="white"
                    />
                </TouchableOpacity>
                <Text className="text-white font-bold text-xl ml-4">
                    Privacy Policy
                </Text>
            </View>

            {/* Content */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="items-center mb-6">
                    <Ionicons
                        name="document-text-outline"
                        size={64}
                        color="#14b8a6"
                    />
                    <Text className="text-teal-400 font-bold text-xl mt-4">
                        Money Tracker
                    </Text>
                </View>

                <View>
                    <Text className="text-gray-400 text-base leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus gravida ultricies nulla non ultricies. Morbi sed
                        velit ex. Nulla facilisi. Nam vitae ex vel libero cursus
                        vehicula non eu lacus. Vivamus dapibus convallis lacus,
                        vel hendrerit enim fermentum vel. Suspendisse potenti.
                        Integer quis venenatis elit.
                    </Text>

                    <Text className="text-gray-400 text-base leading-6 mt-4">
                        Donec malesuada lorem sit amet metus tincidunt, id
                        malesuada mi condimentum. Integer vehicula ex id quam
                        tristique, in ultrices nisl volutpat. Duis nec lacus ac
                        est laoreet feugiat. Nulla facilisi. Suspendisse
                        potenti. Sed vehicula justo at congue consequat.
                    </Text>

                    <Text className="text-gray-400 text-base leading-6 mt-4">
                        Phasellus id congue metus. Fusce a leo dignissim,
                        egestas libero quis, dignissim lectus. Nulla sit amet
                        purus consequat, ultrices urna sit amet, tristique
                        risus. Mauris id scelerisque dolor. Integer vel urna
                        odio. Donec vehicula sollicitudin sem, et porttitor arcu
                        feugiat quis.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}
