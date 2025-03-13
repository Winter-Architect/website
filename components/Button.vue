<template>
  <NuxtLink v-if="to && variant != 'outline'" :to="to" class="inline-block">
    <button
      class="bg-pearl-bush-350 text-outer-space-950 hover:bg-pearl-bush-400 transition-all duration-200 p-3 mt-7 w-full md:w-[15vw] text-lg rounded-md transform hover:scale-105 hover:shadow-glow active:scale-95"
    >
      <slot />
    </button>
  </NuxtLink>
  <a v-else-if="pdfUrl" :href="pdfUrl" download class="inline-block">
    <button
      class="bg-pearl-bush-350 text-outer-space-950 hover:bg-pearl-bush-400 transition-all duration-200 p-3 w-full md:w-[15vw] text-lg rounded-md transform hover:scale-105 hover:shadow-glow active:scale-95"
    >
      <slot />
    </button>
  </a>
  <button
    v-else-if="variant === 'outline'"
    class="text-pearl-bush-350 bg-outer-space-950 hover:bg-outer-space-950 border-2 border-pearl-bush-300 transition-all duration-200 p-3 w-[70vw] md:w-[15vw] text-lg rounded-md transform hover:scale-105 hover:shadow-glow active:scale-95"
  >
    <slot />
  </button>
  <button
    v-else
    class="bg-pearl-bush-350 text-outer-space-950 hover:bg-pearl-bush-400 transition-all duration-200 p-3 w-full md:w-[15vw] text-lg rounded-md transform hover:scale-105 hover:shadow-glow active:scale-95"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  to: String,
  pdfUrl: String,
  variant: String,
});
</script>

<style>
@keyframes glow {
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
  }
}
.hover\\:shadow-glow:hover {
  animation: glow 1s ease-in-out infinite;
}
</style>
