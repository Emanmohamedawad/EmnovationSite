module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // مهم لو عندك app router
  ],

  darkMode: "class", // Enable class-based dark mode

  theme: {
    extend: {
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        none: "none",
      },

      colors: {
        // Professional color palette: White, Navy Blue (0D1A63), Red (F53855)
        primary: {
          50: "#f0f4ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#0D1A63", // Navy Blue
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#F53855", // Red
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        white: "#ffffff",
        // Dark theme colors using the same palette
        dark: {
          // bg: "#0D1A63", // Navy Blue background
          bg: "#1a1a2e", // Slightly lighter than pure navy for better contrast
          surface: "#132440", // Slightly lighter surface
          text: "#ffffff", // White text
          textSecondary: "#a3a3a3", // Neutral gray
          border: "#404040", // Neutral border
        },
      },

      animation: {
        scroll: "scroll 25s linear infinite",
      },

      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },

  variants: {
    extend: {
      boxShadow: ["hover", "active"],
    },
  },

  plugins: [],
};
