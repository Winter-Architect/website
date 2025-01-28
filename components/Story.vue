<template>
  <section id="story">
    <h1 class="text-4xl font-bold text-center my-10 font-orbitron">
      NOTRE HISTOIRE
    </h1>
    <div class="flex flex-col md:flex-row justify-around items-center gap-10">
      <StorySub v-for="el in StoryParts" :key="el.title" :el="el" />
    </div>
  </section>
</template>

<script setup>
const StoryParts = [
  {
    title: "Notre Origine",
    icon: "/icons/originIcon.svg",
    content: `
      <p>Nous sommes un groupe de jeunes étudiants ayant fondé une start-up, <strong>Winter Architect</strong>, 
      pour concrétiser nos projets et offrir des contenus captivants.<br /><br/> Ce nom s'inspire de notre premier jeu, 
      <em>Blackout</em>, où Winter Architect est une faction clé liée aux mystères et innovations de l'histoire.</p>
    `,
  },
  {
    title: "Nos Valeurs",
    icon: "/icons/valeursIcon.svg",
    content: `
      <p><strong>Notre priorité : l'expérience joueur</strong>. Nous souhaitons que les joueurs s'identifient à leur personnage 
      et ressentent pleinement l'histoire. Nous offrons un sentiment gratifiant d'accomplissement en évitant toute redondance.</p>
      <br />
      <p><strong>Un achat, une expérience</strong> : Nos jeux garantissent une immersion immédiate, sans achats intégrés ou publicités.</p>
    `,
  },
  {
    title: "Notre Jeu",
    icon: "/icons/gameIcon.svg",
    content: `
      <p><strong>Blackout</strong> est un jeu de plateforme 3D et de réflexion avec une ambiance d'horreur. 
      Il met en avant une coopération duo :</p>
      
      <ul>
        <li><strong>Agent</strong> : Exploration, survie et résolution d'épreuves avec des contrôles classiques.</li>
        <li><strong>Support</strong> : Interaction avec des objets électroniques pour résoudre les énigmes.</li>
      </ul>
      
      <p>Les joueurs collaborent dans des niveaux générés aléatoirement pour avancer ensemble.</p>
    `,
  },
];
</script>
