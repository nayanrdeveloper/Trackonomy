import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';

interface BackButtonProps {
    classname?: string;
}

export default function BackButton({ classname }: BackButtonProps) {
    const router = useRouter();
    return (
        <TouchableOpacity onPress={() => router.back()} className={classname}>
            <Ionicons name="arrow-back" color={'white'} size={30} />
        </TouchableOpacity>
    );
}
