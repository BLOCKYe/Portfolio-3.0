module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                justDark: {
                    black: '#111111',
                    light: '#242424'
                },
                justWhite: {
                    light: '#EAEAEA',
                    dark: '#686868'
                },
                extra: {
                    color: '#FACF87'
                }
            }
        },
    },
    plugins: [],
}