<template>
  <div class="w-full max-w-7xl mx-auto px-4">
    <!-- Conteneur avec scroll horizontal sur mobile -->
    <div class="relative overflow-x-auto pb-8">
      <!-- Wrapper qui assure une largeur minimale sur mobile -->
      <div class="relative min-w-[640px] md:min-w-0">
        <!-- Timeline line -->
        <div class="absolute left-0 w-full h-1 bg-outer-space-950 top-4"></div>

        <!-- Timeline events -->
        <div class="relative flex justify-between">
          <div
            v-for="(event, index) in events"
            :key="index"
            class="flex flex-col items-center w-32 px-2"
          >
            <!-- Event circle -->
            <div
              class="w-8 h-8 bg-pearl-bush-100 border-4 border-outer-space-950 rounded-full z-10"
            ></div>

            <!-- Event label avec meilleur wrapping -->
            <div class="mt-2 text-sm text-center w-full">
              <div class="text-xs">{{ event.month }}</div>
              <div class="break-words">{{ event.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const events = [
  { month: "Septembre", label: "Début du projet" },
  { month: "Octobre", label: "Début du projet" },
  { month: "Octobre", label: "" },
  { month: "Octobre", label: "" },
  { month: "Octobre", label: "" },
  { month: "Octobre", label: "" },
];
</script>
