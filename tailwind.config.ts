import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: { extend: {
    colors: { brand: "#243F9B", sky: "#4776D0", mist: "#F4F7FC", ink: "#172554", muted: "#64748B" },
    fontFamily: { sans: ["var(--font-jakarta)", "system-ui", "sans-serif"] },
    keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } } },
    animation: { float: "float 6s ease-in-out infinite" },
  } },
  plugins: [],
};
export default config;
