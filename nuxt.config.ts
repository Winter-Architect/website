// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"], //"@nuxt/ui"
  css: [
    "@/public/assets/css/style.css", // Chemin vers votre fichier CSS global
    "@/public/assets/css/clash-display.css",
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },
});
