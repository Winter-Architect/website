<template>
  <section id="games" class="bg-[#1B2A31] w-full mt-[10vh] text-white">
    <div class="w-[80vw] mx-auto">
      <h1 class="text-4xl font-bold text-center my-10 font-orbitron">
        Nos jeux
      </h1>

      <div
        class="x-6 py-16 flex flex-col lg:flex-row items-center justify-evenly"
      >
        <img
          src="/blackout_banniere.png"
          alt=""
          class="rounded-lg shadow-lg w-[40vw] h-[25vw] object-cover object-center hidden md:block"
        />
        <div class="lg:w-1/2 lg:pl-12 my-10 lg:mt-0">
          <h1 class="text-[36px] font-bold text-center">Blackout</h1>
          <div class="my-5">
            <p class="text-[16px] my-5">
              <strong>Blackout</strong> est un jeu de plateforme 3D et de
              réflexion avec une ambiance d'horreur. Il met en avant une
              coopération duo :
            </p>

            <ul>
              <li>
                <strong>Agent</strong> : Exploration, survie et résolution
                d'épreuves avec des contrôles classiques.
              </li>
              <li>
                <strong>Support</strong> : Interaction avec des objets
                électroniques pour résoudre les énigmes.
              </li>
            </ul>

            <p>
              Les joueurs collaborent dans des niveaux générés aléatoirement
              pour avancer ensemble.
            </p>
          </div>
          <Button
            to="https://github.com/Winter-Architect/blackout/releases"
            @click="DownloadClicked"
            >Téléchargez le jeu!</Button
          >
        </div>
      </div>

      <div class="my-10">
        <h1 class="font-bold text-3xl font-orbitron">STATISTIQUES</h1>
        <div
          class="md:flex flex-col md:flex-row align-center justify-evenly my-10"
        >
          <Stat :nb="downloads.length" text="Téléchargements" />
          <Stat :nb="users.length" text="Joueurs uniques" />
          <Stat :nb="connectedUsers.length" text="Joueur(s) connecté(s)" />
        </div>
        <div class="h-[0.8px] w-[80vw] bg-pearl-bush-350" />
      </div>
      <div class="my-10 mt-20">
        <h1 class="font-bold text-3xl my-10 font-orbitron">TIMELINE</h1>
        <Timeline />
      </div>
      <div>
        <h1 class="font-bold text-3xl font-orbitron">RESSOURCES UTILISEES</h1>
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
        <h1 class="font-bold text-3xl my-10 font-orbitron">DOCUMENTS</h1>
        <div
          class="md:grid grid-cols-4 gap-5 flex flex-col md:place-items-center"
        >
          <Button pdfUrl="/docs/cahier_des_charges.pdf"
            >Cahier des charges</Button
          >
          <Button pdfUrl="/docs/Rapport_de_soutenance_1.pdf"
            >Rapport de soutenance n°1</Button
          >
          <Button pdfUrl="/docs/Plan_de_soutenance_1.pdf">
            Plan de soutenance n°1</Button
          >
          <Button pdfUrl="/docs/Rapport_de_soutenance_2.pdf"
            >Rapport de soutenance n°2</Button
          >
          <Button pdfUrl="/docs/Plan_de_soutenance_2.pdf">
            Plan de soutenance n°2</Button
          >
        </div>
      </div>

      <div class="my-10 mt-20">
        <h1 class="font-bold text-3xl my-10 font-orbitron">IMAGES</h1>
        <!-- Carrousel d'images -->
        <div class="w-full flex flex-col items-center my-8">
          <div class="relative w-[50vw] h-[40vh]">
            <img
              :src="carouselImages[carouselIndex]"
              alt="Screenshot Blackout"
              class="rounded-lg object-cover w-full h-full shadow-lg transition"
            />
            <button
              class="absolute left-0 top-1/2 -translate-y-1/2 bg-pearl-bush-350 p-2 rounded-full shadow hover:bg-pearl-bush-400"
              @click="prevImage"
              aria-label="Précédent"
            >
              <Icon name="i-mdi-arrow-left" />
            </button>
            <button
              class="absolute right-0 top-1/2 -translate-y-1/2 bg-pearl-bush-350 p-2 rounded-full shadow hover:bg-pearl-bush-400"
              @click="nextImage"
              aria-label="Suivant"
            >
              <Icon name="i-mdi-arrow-right" />
            </button>
          </div>
          <div class="flex gap-2 mt-2">
            <span
              v-for="(img, idx) in carouselImages"
              :key="idx"
              class="w-2 h-2 rounded-full"
              :class="
                carouselIndex === idx
                  ? 'bg-pearl-bush-400'
                  : 'bg-pearl-bush-350'
              "
            ></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const slider = ref(null);
const isRight = ref(false);
const isLeft = ref(true);

const connectedUsers = await fetch(
  "https://api.nocteln.fr/blackout/connectedUsers"
).then((res) => res.json());
const users = await fetch("https://api.nocteln.fr/blackout/users").then((res) =>
  res.json()
);

const downloads = await fetch("https://api.nocteln.fr/blackout/download").then(
  (res) => res.json()
);

async function DownloadClicked() {
  await fetch("https://api.nocteln.fr/blackout/download", {
    method: "POST",
  });
}

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
    name: "Netlify",
    link: "https://www.netlify.com/",
    icon: "i-logos-netlify-icon",
  },
];

const carouselImages = [
  "https://placehold.co/350x220?text=Image+1",
  "https://placehold.co/350x220?text=Image+2",
  "https://placehold.co/350x220?text=Image+3",
];

const carouselIndex = ref(0);

const prevImage = () => {
  carouselIndex.value =
    (carouselIndex.value - 1 + carouselImages.length) % carouselImages.length;
};

const nextImage = () => {
  carouselIndex.value = (carouselIndex.value + 1) % carouselImages.length;
};
</script>
