/** @type {import('tailwindcss').Config} */

export default {

    content: [

        "./index.html",

        "./src/**/*.{js,ts,jsx,tsx}"
    ],

    theme: {

        extend: {

            colors: {

                cyberRed: "#ff3b3b",

                cyberDark: "#050505",

                cyberPanel: "#0a0a0a"
            },

            boxShadow: {

                glow:
                    "0 0 20px rgba(255,0,0,0.25)"
            }
        }
    },

    plugins: []
};
