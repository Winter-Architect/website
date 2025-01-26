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
/*
        :content="el.content"
        :title="el.title"
        :icon="el.icon"*/
const StoryParts = [
  {
    title: "Notre Origine",
    icon: "/originIcon.svg",
    content: `
      <p>En tant que groupe de jeunes étudiants, nous avons décidé de nous ouvrir 
      au monde de l'entreprise en fondant notre propre start-up, afin de 
      travailler sur des projets qui nous tiennent chacun à cœur ainsi que 
      pour offrir des contenus qui ravissent aussi bien nos membres que les 
      clients.</p>
      
      <p>C'est donc un honneur pour nous de vous présenter <strong>Winter 
      Architect</strong>, start-up que nous souhaitons orienter vers le développement 
      de jeux vidéo. Ce nom n'est pas anodin puisqu'il s'agit de la base de 
      notre évolution, étant lié à notre tout premier projet de jeu, <em>Blackout</em>.</p>
      
      <p>En effet, dans le lore de notre jeu, <strong>Winter Architect</strong> est la faction la 
      plus importante. L'exploration de leurs (nos) locaux permet au joueur de 
      se rendre compte de l'étendue des secrets et des anomalies qui y sont 
      enfermés, ainsi que de l'étendue des conséquences qu'aurait cette 
      entreprise sur l'humanité si la moindre de leurs innovations venait à 
      s'échapper ou à être capturée.</p>
    `,
  },
  {
    title: "Nos Valeurs",
    icon: "/originIcon.svg",
    content: `
      <p><strong>Nos valeurs sont centrées sur l'expérience du joueur</strong>. Nous accordons une importance 
      considérable à ce qui se répercute sur le sentiment du joueur. En effet, 
      plus qu'un marionnettiste qui se sert de sa marionnette, nous voulons qu'il 
      s'identifie à celle-ci ou, à minima, qu'il ressente ce que le personnage puisse ressentir.</p>
      
      <p>Nous aspirons à procurer un sentiment gratifiant d'accomplissement en offrant 
      la possibilité de finir le jeu, de le compléter. Ce sentiment est primordial dès 
      lors qu'il donne la sensation au joueur d'avoir avancé dans son périple, d'avoir joué 
      pour atteindre un objectif, mais principalement d'avoir vécu une histoire.</p>
      
      <p><em>Pour faire simple, nous voulons que nos joueurs vivent l'histoire du personnage 
      sans être parcourus par un sentiment d'inachevé ou encore de redondance.</em></p>
      
      <p><strong>Un achat, une expérience</strong> : C'est ainsi que nous proposons une expérience unique 
      pour chacun de nos jeux. Notre dessein est d'offrir une expérience immédiate et 
      immersive au joueur alors qu'il se décide à lancer le jeu, en nous écartant de l'aspect 
      sangsue du modèle économique courant, tels que des achats en jeu pour des cosmétiques ou des publicités.</p>
    `,
  },
  {
    title: "Notre Jeu",
    icon: "/originIcon.svg",
    content: `
      <p><strong>Blackout</strong> est un <em>3D platformer / puzzle solver</em> qui pousse les joueurs 
      à la réflexion dans une ambiance d'horreur. Un élément central de l'expérience <strong>Blackout</strong> est 
      son aspect duo coopératif :</p>
      
      <ul>
        <li><strong>Agent</strong> : Le premier joueur utilise des contrôles classiques (mouvement 
        bidimensionnel, saut, interaction avec PNJs et objets interactables). Sa mission est 
        d'explorer le terrain, comprendre les épreuves et survivre aux attaques ennemies.</li>
        
        <li><strong>Support</strong> : Le second joueur possède des contrôles uniques. Il interagit avec 
        des objets électroniques (bras robotiques, portes, aimants, caméras, etc.) et joue un rôle clé 
        dans la résolution des énigmes.</li>
      </ul>
      
      <p>Les deux joueurs doivent collaborer pour avancer dans des salles générées 
      pseudo-aléatoirement, utilisant leurs compétences et leur créativité pour surmonter les épreuves.</p>
    `,
  },
];
</script>
