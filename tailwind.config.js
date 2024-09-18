tailwind.config = {
  theme: {
    extends: {
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
        auto1: "repeat(auto-fit, minmax(500px, 1fr))",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },

      colors: {
        lightHover: "#dfdfff",
        drakHover: "#2a00ff",
      },

      boxShadow: {
        black: "4px 4px 0 #000",
        White: "4px 4px 0 #fff",
      },
    },
    animation: {
      spin_slow: "spin 5s linear infinite",
    },
  },
};
