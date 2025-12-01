export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
        extend: {
             fontFamily: {
                mono: ['"Fira Mono"', 'ui-monospace', 'monospace'], // 自定义字体
            },
        },
    },
    plugins: [],
}