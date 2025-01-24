<template>
  <section id="games" class="bg-[#1B2A31] w-full mt-[10vh] text-white">
    <div class="w-[80vw] mx-auto">
      <h1 class="text-4xl font-bold text-center my-10">Nos jeux</h1>

      <div
        class="px-6 py-16 flex flex-col lg:flex-row items-center justify-evenly"
      >
        <img
          src="https://placehold.co/535x340"
          alt=""
          class="rounded-lg shadow-lg w-[20vw] h-[15vw] object-cover object-center"
        />
        <div class="lg:w-1/2 lg:pl-12 mt-10 lg:mt-0">
          <h1 class="text-[36px]">Blackout</h1>
          <p class="text-[16px] my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            accusantium vitae maxime molestiae recusandae culpa voluptas! Id
            dolorum a possimus. Ad doloremque possimus ex fugit eius neque
            nulla? Accusamus delectus accusantium quis eveniet repudiandae fuga!
          </p>
          <Button>Téléchargez le jeu!</Button>
        </div>
      </div>

      <div class="my-10">
        <h1 class="font-bold text-3xl">STATISTIQUES</h1>
        <div class="flex justify-evenly my-10">
          <Stat nb="10" text="téléchargements" />
          <Stat nb="82" text="documents obtenus" />
          <Stat nb="3" text="joueurs connecté" />
        </div>
        <div class="h-[0.8px] w-[80vw] bg-pearl-bush-350" />
      </div>
      <div class="my-10 mt-20">
        <h1 class="font-bold text-3xl my-10">TIMELINE</h1>
        <Timeline />
      </div>
      <div>
        <h1 class="font-bold text-3xl">RESSOURCES UTILISEES</h1>
        <div
          class="relative flex items-center justify-center mt-10 max-w-[80vw] mx-auto"
        >
          <!-- Flèche gauche -->

          <!-- Conteneur du slider -->
          <div
            ref="slider"
            class="flex gap-5 overflow-x-scroll hide-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            <Ressource
              v-for="res in ressources"
              :key="res.name"
              :icon="res.icon"
              :name="res.name"
              :link="res.link"
              class="snap-center"
            />
          </div>

          <!-- Flèche droite -->
        </div>
        <div class="flex justify-center mt-10 gap-10">
          <button
            class="text-center z-10 bg-pearl-bush-350 w-10 h-10 text-black p-2 rounded-full hover:bg-pearl-bush-400 transition"
            @click="scrollLeft"
          >
            <Icon name="i-mdi-arrow-left" />
          </button>
          <button
            class="z-10 bg-pearl-bush-350 w-10 h-10 text-black p-2 rounded-full hover:bg-pearl-bush-400 transition"
            @click="scrollRight"
          >
            <Icon name="i-mdi-arrow-right" />
          </button>
        </div>
      </div>
      <div class="my-10 mt-20">
        <h1 class="font-bold text-3xl my-10">DOCUMENTS</h1>
        <div class="grid grid-cols-4 gap-5">
          <Button>Cahier des charges</Button>
          <Button>Cahier des charges</Button>
          <Button>Cahier des charges</Button>
          <Button>Cahier des charges</Button>
          <Button>Cahier des charges</Button>
          <Button>Cahier des charges</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const slider = ref(null);
const isRight = ref(false);
const isLeft = ref(true);

const scrollLeft = () => {
  if (slider.value) {
    slider.value.scrollBy({ left: -200, behavior: "smooth" });
  }
};

const scrollRight = () => {
  if (slider.value) {
    slider.value.scrollBy({ left: 200, behavior: "smooth" });
  }
};

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
    name: "github",
    link: "https://github.com/",
    icon: "i-logos-github-icon",
  },
  {
    name: "Discord",
    link: "https://discord.com/",
    icon: "i-logos-discord-icon",
  },
  {
    name: "VS Code",
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
