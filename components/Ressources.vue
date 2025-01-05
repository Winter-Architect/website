<template>
  <div class="w-[70vw]">
    <div
      class="flex justify-between flex-wrap gap-5 md:gap-10 lg:gap-20 lg:text-lg"
    >
      <div v-for="res in ressources" :key="res.name">
        <a
          :href="res.link"
          target="_blank"
          class="flex items-center space-x-2 hover:text-outer-space-800 hover:font-semibold"
        >
          <Icon :name="res.icon" />
          <span>{{ res.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const ressources = [
  { name: "Vue.js", link: "https://vuejs.org/", icon: "i-logos-vue" },
  { name: "Vite", link: "https://vitejs.dev/", icon: "i-logos-vitejs" },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: "i-logos-tailwindcss-icon",
  },
  { name: "Unity", link: "https://unity.com/fr", icon: "i-mdi-unity" },
  {
    name: "Rider",
    link: "https://www.jetbrains.com/fr-fr/rider/",
    icon: "i-devicon-rider",
  },
  {
    name: "githHub",
    link: "https://github.com/",
    icon: "i-logos-github-icon",
  },
  {
    name: "Discord",
    link: "https://discord.com/",
    icon: "i-logos-discord-icon",
  },
  {
    name: "Visual Studio Code",
    link: "https://code.visualstudio.com/",
    icon: "i-logos-visual-studio-code",
  },
  {
    name: "Vercel",
    link: "https://vercel.com/",
    icon: "i-logos-vercel-icon",
  },
];
</script>
