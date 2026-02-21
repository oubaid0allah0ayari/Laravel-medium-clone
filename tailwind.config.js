import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        "./node_modules/flowbite/**/*.js",
    ],

    theme: {
        extend: {
            colors: {
                brand: '#2563eb',
                body: '#6b7280',
                heading: '#111827',
                'neutral-secondary': '#f3f4f6',
                'neutral-secondary-soft': '#f9fafb',
            },
            borderRadius: {
                base: '0.5rem'
            }
        }
    },

    plugins: [forms, require('flowbite/plugin')],
};
