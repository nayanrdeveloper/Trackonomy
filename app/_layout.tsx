import { Stack } from "expo-router";
import { ROUTES } from "@/src/constants/routes";
import "../global.css";

export default function RootLayout() {
  const allRoutes = [
    ...ROUTES.AUTH,
    ...ROUTES.MAIN,
  ];

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {allRoutes.map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          options={route.options}
        />
      ))}
    </Stack>
  );
}
