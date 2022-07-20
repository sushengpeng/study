/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}