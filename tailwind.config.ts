import { theme } from "#tailwind-config";

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "pearl-bush": {
          "50": "#f9f6f3",
          "100": "#eae0d5", // couleur de base
          "200": "#e2d4c6",
          "300": "#cfb7a2",
          "400": "#bb957c",
          "500": "#ad7d62",
          "600": "#a06b56",
          "700": "#855749",
          "800": "#6d493f",
          "900": "#593c35",
          "950": "#2f1e1b",
        },
        "outer-space": {
          "50": "#f2f8f9",
          "100": "#deecef",
          "200": "#c2dbdf",
          "300": "#97c1c9",
          "400": "#659fab",
          "500": "#4a8390",
          "600": "#406d7a",
          "700": "#395a65",
          "800": "#354d55",
          "900": "#2f414a",
          "950": "#22333b",
        },
      },
    },
  },
};
