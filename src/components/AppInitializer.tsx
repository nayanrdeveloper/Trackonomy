import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setToken } from '@/src/redux/auth/authSlice';
import { useConnectivity } from '../hooks/useConnectivity';

const AppInitializer: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const isConnected = useConnectivity();

    useEffect(() => {
        const initializeApp = async () => {
            if (isConnected === false) {
                router.replace('/nointernetscreen');
                return;
            }

            if (isConnected === true) {
                const token = await AsyncStorage.getItem('authToken');
                if (token) {
                    dispatch(setToken(token));
                    router.replace('/home');
                } else {
                    router.replace('/auth/login');
                }
            }
        };

        initializeApp();
    }, [dispatch, router]);

    if (isConnected === null) {
        console.log('Checking internet connection...');
        return null;
    }

    return <>{children}</>;
};

export default AppInitializer;
