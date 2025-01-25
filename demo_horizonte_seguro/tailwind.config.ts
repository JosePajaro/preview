import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'verde1-custom': '#0A2729',
        'azul-custom': '#215B6F',
        'verde2-custom': '#7FCEB8',
        'verde3-custom': '#138583',
      },
    },
  },
  plugins: [],
} satisfies Config;
