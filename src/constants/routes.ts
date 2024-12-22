export const ROUTES = {
    AUTH: [
        { name: 'auth/login', options: { title: 'Login' } },
        { name: 'auth/registration', options: { title: 'Registration' } },
        {
            name: 'auth/otpVerification',
            options: { title: 'OTP Verification' },
        },
    ],
    MAIN: [
        {
            name: 'onBoardingScreen',
            options: { title: 'Onboarding' },
        },
        { name: 'transactions', options: { title: 'Transactions' } },
        { name: 'home', options: { title: 'Home', headerShown: false } },
    ],
};
