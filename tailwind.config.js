module.exports = {
  content: ["./index.html", "./style.css"],
  purge: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "hsl(225, 100%, 94%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "desaturated-blue": "hsl(224, 23%, 55%)",
        "dark-blue": "hsl(223, 47%, 23%)",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/pattern-background-desktop.svg')",
      },
    },
  },
  plugins: [],
};
