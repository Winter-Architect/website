<template>
  <section
    class="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center"
    id="quisommesnous"
  >
    <div class="relative lg:w-1/2 w-[25vw] h-[25vw]">
      <img
        src="/photos/photo_equipe.jpeg"
        alt="Image 1"
        class="rounded-lg shadow-lg w-full h-full object-cover object-center"
      />
      <span
        class="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-sm px-3 py-2 rounded"
      >
        générée par ia
      </span>
    </div>

    <!-- Colonne droite (texte) -->
    <div class="lg:w-1/2 lg:pl-12 mt-10 lg:mt-0">
      <h2
        class="text-2xl md:text-4xl font-bold uppercase tracking-wider mb-6 font-orbitron"
      >
        Qui sommes-nous?
      </h2>
      <p class="text-lg leading-relaxed">
        Nous sommes une équipe de 5 étudiants en première année à EPITA,
        passionnés par l'informatique et le développement de jeux vidéo. Notre
        objectif est de créer des expériences interactives captivantes, en
        mêlant créativité et compétences techniques.
      </p>
    </div>
  </section>
</template>
