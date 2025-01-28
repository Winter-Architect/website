<template>
  <div
    class="w-[90vw] md:w-[25vw] bg-gradient-to-r from-pearl-bush-300 to-outer-space-950 p-[1.5px] rounded-3xl"
  >
    <div class="bg-[#1B2A31] p-5 rounded-[calc(1.5rem-1px)]">
      <div
        class="bg-outer-space-950 p-2 rounded-full w-[10vh] h-[10vh] flex items-center justify-center"
      >
        <img :src="el.icon" alt="icon" />
      </div>
      <h1 class="text-pearl-bush-300 font-bold text-2xl my-[2vh]">
        {{ el.title }}
      </h1>

      <div v-html="el.content"></div>
    </div>
  </div>
</template>

<script setup>
const { el } = defineProps(["el"]);
</script>
