<template>
  <div
    class="w-[25vw] bg-gradient-to-r from-pearl-bush-300 to-outer-space-950 p-[1.5px] rounded-3xl"
  >
    <div class="bg-[#1B2A31] p-5 rounded-[calc(1.5rem-1px)]">
      <div
        class="bg-outer-space-950 p-2 rounded-full w-[10vh] h-[10vh] flex items-center justify-center"
      >
        <img :src="props.icon" alt="icon" />
      </div>
      <h1 class="text-pearl-bush-300 font-bold text-2xl my-[2vh]">
        {{ props.title }}
      </h1>

      <!-- ref="contentRef" -->
      <p
        :style="{ maxHeight: showMore ? 'none' : '30vh', overflow: 'hidden' }"
        v-html="props.content"
      ></p>
      <button class="text-pearl-bush-300" @click="ShowMore">
        En voir {{ showMore ? "moins" : "plus" }} >>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title", "content", "icon"]);
let showMore = ref(false);
const contentRef = ref(null);

function ShowMore() {
  showMore.value = !showMore.value;
}
</script>
