<template>
  <div
    class="bg-pearl-bush-100 w-[80vw] p-5 pt-10 relative m-10 mb-20 rounded-md flex flex-col"
  >
    <h1
      class="absolute -top-10 bg-pearl-bush-100 border-outer-space-950 border-4 p-5 rounded-full h-[10vh] w-auto md:w-[20vw] flex justify-center md:justify-start items-center"
    >
      <div class="flex items-end gap-1 font-bold">
        <span class="text-3xl font-bold leading-none">{{ number }}.</span>
        <span class="text-2xl leading-none">{{ name }}</span>
      </div>
    </h1>

    <slot />
  </div>
</template>

<script setup>
const { name, number } = defineProps(["name", "number"]);
</script>
