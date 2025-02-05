<template>
  <div>
    <div
      class="md:w-[10vw] bg-gradient-to-b from-pearl-bush-300 to-outer-space-950 p-[1.5px] rounded-md"
    >
      <div
        class="bg-[#1B2A31] p-5 rounded-[calc(0.375rem-1px)] flex flex-col items-center"
      >
        <div
          class="bg-outer-space-950 p-2 rounded-full w-[10vh] h-[10vh] flex items-center justify-center"
        >
          <Icon
            :name="icon"
            dynamic
            class="w-[5vh] h-[5vh] flex items-center justify-center"
          />
        </div>
        <a :href="link" target="_blank" class="pt-5 font-bold">{{ name }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { icon, name, link } = defineProps(["icon", "name", "link"]);
</script>
