/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                darkBg: '#212129',
                gray: {
                    800: '#2D3748',
                    900: '#1F2937',
                    500: '#A0AEC0',
                },
                teal: {
                    400: '#38B2AC',
                },
                red: {
                    500: '#E53E3E',
                },
            },
            spacing: {
                64: '16rem',
            },
            borderRadius: {
                '3xl': '1.5rem',
            },
        },
    },
    plugins: [],
};
