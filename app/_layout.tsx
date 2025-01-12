import { Stack } from 'expo-router';
import { ROUTES } from '@/src/constants/routes';
import '../global.css';
import { Provider } from 'react-redux';
import store from '@/src/redux/store';
import AppInitializer from '@/src/components/AppInitializer';

export default function RootLayout() {
    const allRoutes = [...ROUTES.AUTH, ...ROUTES.MAIN];

    return (
        <Provider store={store}>
            <AppInitializer>
                <Stack screenOptions={{ headerShown: false }}>
                    {allRoutes.map((route) => (
                        <Stack.Screen
                            key={route.name}
                            name={route.name}
                            options={route.options}
                        />
                    ))}
                </Stack>
            </AppInitializer>
        </Provider>
    );
}
