import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ tabBarLabel: "Dashboard" }} />
      <Tabs.Screen name="expense" options={{ tabBarLabel: "Expense" }} />
      <Tabs.Screen name="income" options={{ tabBarLabel: "Income" }} />
      <Tabs.Screen name="settings" options={{ tabBarLabel: "Settings" }} />
    </Tabs>
  );
}
