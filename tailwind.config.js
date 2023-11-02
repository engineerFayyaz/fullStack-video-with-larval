module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f5f1f5",
          500: "#a9a9aa",
          700: "#5b5b5b",
          900: "#15161c",
          "900_02": "#121212",
          "900_01": "#1d1d1d",
        },
        blue_gray: { 100: "#d2d2d2", "100_01": "#d9d9d9" },
        white: { A700_90: "#ffffff90", A700_87: "#ffffff87", A700: "#ffffff" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        amber: { A200: "#f1c644" },
        purple: { A100_7f: "#d883ff7f", A100: "#d883ff" },
        green: { A700_26: "#27be6726" },
        pink: { 500: "#ec008b" },
      },
      boxShadow: {
        bs: "0px 12px  32px 0px #d883ff7f",
        bs1: "0px 4px  4px 0px #0000003f",
        bs2: "0px 5px  10px 0px #27be6726",
      },
      fontFamily: {
        poppins: "Poppins",
        opensans: "Open Sans",
        nunitosans: "Nunito Sans",
        catamaran: "Catamaran",
        inter: "Inter",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
