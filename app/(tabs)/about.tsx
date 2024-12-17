import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function about() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>about screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue",
    }
})