<template>
  <div class="w-full mx-auto px-4">
    <!-- Conteneur avec scroll horizontal sur mobile -->
    <div class="relative overflow-x-auto pb-8">
      <!-- Wrapper qui assure une largeur minimale sur mobile -->
      <div class="relative min-w-[640px] md:min-w-0">
        <!-- Timeline line -->
        <div class="absolute left-0 w-full h-0.5 bg-pearl-bush-350 top-3"></div>

        <!-- Timeline events -->
        <div class="relative flex justify-between">
          <div
            v-for="(event, index) in events"
            :key="index"
            class="flex flex-col items-center w-32 px-2"
          >
            <!-- Container pour la ligne de connexion -->
            <div class="relative w-full">
              <!-- Event circle -->
              <div
                class="w-6 h-6 bg-[#1B2A31] border-4 border-pearl-bush-350 rounded-full z-10 relative"
              ></div>
            </div>

            <!-- Event label avec meilleur wrapping -->
            <div class="mt-2 text-sm w-full">
              <div class="text-md font-bold">{{ event.month }}</div>
              <div class="">{{ event.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const events = [
  { month: "Octobre", label: "Prise de connaissance du projet" },
  { month: "Novembre", label: "Rédaction du cahier des charges" },
  { month: "Décembre", label: "Début du projet" },
  { month: "Janvier", label: "Première soutenance" },
  { month: "Mars", label: "Deuxieme soutenance" },
  { month: "Mai", label: "Rendu du projet" },
];
</script>
