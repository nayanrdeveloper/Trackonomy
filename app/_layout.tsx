import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Onboarding */}
      <Stack.Screen name="onBoarding/onBoardingScreen" options={{ title: "Onboarding" }} />

      {/* Authentication */}
      <Stack.Screen name="auth/login" options={{ title: "Login" }} />
      <Stack.Screen name="auth/registration" options={{ title: "Registration" }} />
      <Stack.Screen name="auth/otpVerification" options={{ title: "OTP Verification" }} />

      {/* Home */}
      <Stack.Screen name="home" options={{ title: "Home", headerShown: false }} />
    </Stack>
  );
}
