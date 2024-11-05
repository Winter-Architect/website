<template>
  <div class="w-[70vw]">
    <div class="flex justify-between flex-wrap gap-5 md:gap-10">
      <div v-for="res in ressources" :key="res.name">
        <a :href="res.link" target="_blank" class="flex items-center space-x-2">
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
  { name: "Vue.js", link: "https://vuejs.org/", icon: "i-logos-vue" },
  { name: "Vite", link: "https://vitejs.dev/", icon: "i-logos-vitejs" },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: "i-logos-tailwindcss-icon",
  },
  { name: "Vue.js", link: "https://vuejs.org/", icon: "i-logos-vue" },
  { name: "Vite", link: "https://vitejs.dev/", icon: "i-logos-vitejs" },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: "i-logos-tailwindcss-icon",
  },
  { name: "Vue.js", link: "https://vuejs.org/", icon: "i-logos-vue" },
  { name: "Vite", link: "https://vitejs.dev/", icon: "i-logos-vitejs" },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: "i-logos-tailwindcss-icon",
  },
  { name: "Vue.js", link: "https://vuejs.org/", icon: "i-logos-vue" },
  { name: "Vite", link: "https://vitejs.dev/", icon: "i-logos-vitejs" },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: "i-logos-tailwindcss-icon",
  },
  { name: "Vue.js", link: "https://vuejs.org/", icon: "i-logos-vue" },
  { name: "Vite", link: "https://vitejs.dev/", icon: "i-logos-vitejs" },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: "i-logos-tailwindcss-icon",
  },
  { name: "Vue.js", link: "https://vuejs.org/", icon: "i-logos-vue" },
  { name: "Vite", link: "https://vitejs.dev/", icon: "i-logos-vitejs" },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: "i-logos-tailwindcss-icon",
  },
];
</script>
