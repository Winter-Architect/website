<template>
  <div>
    <h1 class="text-2xl font-semibold pt-10 pb-3 w-[80vw]">Timeline</h1>
    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-0 w-full h-1 bg-outer-space-950 top-4"></div>

      <!-- Timeline events -->
      <div class="relative flex justify-between">
        <div
          v-for="(event, index) in events"
          :key="index"
          class="flex flex-col items-center"
        >
          <!-- Event circle -->
          <div
            class="w-8 h-8 bg-pearl-bush-100 border-4 border-outer-space-950 rounded-full z-10"
          ></div>

          <!-- Event label -->
          <div class="mt-2 text-sm text-center">
            <div class="text-xs">{{ event.month }}</div>
            <div>{{ event.label }}</div>
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
