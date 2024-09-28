<template>
  <NuxtLink v-if="to" :to="to" class="inline-block">
    <button
      class="text-pearl-bush-100 bg-outer-space-950 hover:bg-outer-space-800 transition hover:rotate-[360deg] duration-700 p-3 mt-7 w-[15vw] text-lg rounded-md"
    >
      <slot />
    </button>
  </NuxtLink>
  <button
    v-else
    class="text-pearl-bush-100 bg-outer-space-950 hover:bg-outer-space-800 transition hover:rotate-[360deg] duration-700 p-3 mt-7 w-[15vw] text-lg rounded-md"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  to: {
    type: [String, Object],
    default: null,
  },
});
</script>
