import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
    return (<Tabs screenOptions={{
        tabBarActiveTintColor: "lightblue",
        headerStyle: {
            backgroundColor: "lightblue",
        },
        headerShadowVisible: false,
        headerTintColor: "white",
        tabBarStyle: { 
            backgroundColor: "blue",
            borderTopWidth: 0
        }
    }}>
        <Tabs.Screen name="index" options={{
            headerTitle: "Trackonomy",
            tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'home-sharp': 'home-outline'} size={24} color={color} />,
        }} />
        <Tabs.Screen name="about" options={{
            headerTitle: "About",
            tabBarIcon: ({ color, focused }) => <Ionicons name={focused? 'information-circle-sharp': 'information-circle-outline'} size={24} color={color} />,
        }} />
    </Tabs>);
}
