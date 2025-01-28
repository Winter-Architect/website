<template>
  <div class="px-6">
    <h1 class="font-bold text-3xl my-10 text-center">NOTRE ÉQUIPE</h1>
    <div
      class="accordion flex w-full max-w-6xl mx-auto h-80 rounded-lg overflow-hidden"
    >
      <div
        class="accordion-item relative flex-1 transition-[flex] duration-500 ease-in-out cursor-pointer overflow-hidden"
        v-for="(member, index) in team"
        :key="index"
        @mouseover="hoverIndex = index"
        @mouseleave="hoverIndex = null"
        :class="{ 'flex-[4]': hoverIndex === index }"
      >
        <img
          :src="member.image"
          :alt="member.name"
          class="w-full h-full object-cover transition-transform duration-500 object-[center_15%]"
          :class="{ 'scale-110': hoverIndex === index }"
        />
        <div
          class="content absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg opacity-0 translate-y-4 transition-all duration-500"
          :class="{ 'opacity-100 translate-y-0': hoverIndex === index }"
        >
          <h3 class="font-bold text-lg">{{ member.name }}</h3>
          <p class="text-sm">{{ member.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Liste de membres de l'équipe
const team = ref([
  {
    name: "Wassim Alouini",
    description: "Chef de projet et responsable multijoueur.",
    image: "/photos/wassim.alouini.jpg",
  },
  {
    name: "Brewen Merer",
    description: "Responsable des intelligences artificielles.",
    image: "/photos/brewen.merer.jpg",
  },
  {
    name: "Loan Maria-Chatelain",
    description: "Responsable level design.",
    image: "/photos/loan.maria-chatelain.jpg",
  },
  {
    name: "Fabien Guessant",
    description: "Responsable des graphismes et de la modélisation.",
    image: "/photos/fabien.guessant.jpg",
  },
  {
    name: "Eliott Mieze",
    description: "Responsable des interfaces graphiques et du site web.",
    image: "/photos/eliott.mieze.jpg",
  },
]);

// Index pour le hover
const hoverIndex = ref(null);
</script>

<style scoped>
.accordion-item:hover img {
  transform: scale(1.01);
}
</style>
