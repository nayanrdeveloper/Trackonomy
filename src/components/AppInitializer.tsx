import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setToken } from '@/src/redux/auth/authSlice';

const AppInitializer: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = await AsyncStorage.getItem('authToken');
                if (token) {
                    dispatch(setToken(token));
                    router.replace('/home');
                } else {
                    router.replace('/auth/login');
                }
            } catch (error) {
                console.error('Error checking token:', error);
                router.replace('/auth/login');
            }
        };

        checkToken();
    }, [dispatch, router]);

    return <>{children}</>;
};

export default AppInitializer;
