import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{headerTitle: "Oops Not Found this Screen"}} />
    <View>
        {/* <Link href="/" style={{padding: 15, backgroundColor: "lightblue", borderRadius: 10, marginTop: 15}}>
        Go to Home Screen
        </Link> */}
    </View>
    </>
  )
}