import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

interface BackButtonProps {
  classname?: string;
}

export default function BackButton({ classname }: BackButtonProps) {
    const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.back()} className={classname}>
      <Ionicons name="arrow-back" color={'white'} size={30} />
    </TouchableOpacity>
  )
}