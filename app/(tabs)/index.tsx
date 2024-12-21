import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Trackonoy Home Screen.</Text>
      <Link style={styles.button} href="/(tabs)/about">
        <Text className="text-yellow-500 bg-green-800 p-4 m-4">Go to About</Text>
        </Link>
    </View>
  );
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
  },
  button: {
    padding: 15,
    backgroundColor: "lightblue",
    borderRadius: 10,
    marginTop: 15,
  },
});
