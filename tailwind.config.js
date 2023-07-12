/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        fontFamily: {
            'sans': ['Open sans'],
        },
        extend: {
            width: {
                '90%': '90%',
                '30%': '30%',
                '70%': '70%',
            }
        }
    },
    plugins: [],
}

