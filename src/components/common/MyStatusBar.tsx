import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

const MyStatusBar = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#38B2AC' }}>
            <StatusBar backgroundColor={'#38B2AC'} barStyle={'light-content'} />
        </SafeAreaView>
    );
};

export default MyStatusBar;
