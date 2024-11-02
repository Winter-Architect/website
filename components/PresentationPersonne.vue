<template>
  <div class="flex text-pearl-bush-950 justify-evenly m-10 flex-wrap">
    <div
      class="bg-gradient-to-br from-pearl-bush-100 to-pearl-bush-200 p-12 w-[80vw] rounded-2xl flex justify-between gap-12 transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-pearl-bush-300/30 transform hover:scale-[1.02]"
    >
      <div class="md:max-w-[40vw] opacity-0 animate-fadeIn space-y-6">
        <h1 class="font-bold text-3xl pb-3 relative">
          {{ name }}
          <span
            class="absolute bottom-0 left-0 w-1/4 h-1 bg-pearl-bush-400 rounded-full"
          ></span>
        </h1>
        <slot />

        <div>
          <h3 class="relative font-bold text-xl pb-3">
            Socials
            <span
              class="absolute bottom-0 left-0 w-[3vw] h-1 bg-pearl-bush-400 rounded-full"
            ></span>
          </h3>
          <div class="flex gap-6 pt-8 text-3xl items-center">
            <a
              v-if="linkedin"
              :href="linkedin"
              target="_blank"
              class="transition-all duration-300 ease-in-out hover:scale-125 hover:text-blue-500 hover:-translate-y-1"
              title="LinkedIn"
            >
              <Icon name="i-bxl-linkedin-square" />
            </a>
            <a
              v-if="github"
              :href="github"
              target="_blank"
              class="transition-all duration-300 ease-in-out hover:scale-125 hover:text-blue-900 hover:-translate-y-1"
              title="GitHub"
            >
              <Icon name="i-bxl-github" />
            </a>
            <a
              v-if="instagram"
              :href="instagram"
              target="_blank"
              class="transition-all duration-300 ease-in-out hover:scale-125 hover:text-pink-500 hover:-translate-y-1"
              title="Instagram"
            >
              <Icon name="i-bxl-instagram" /> </a
            ><a
              v-if="discord"
              :href="discord"
              target="_blank"
              class="transition-all duration-300 ease-in-out hover:scale-125 hover:text-[#505be4] hover:-translate-y-1"
              title="Instagram"
            >
              <Icon name="i-ic-baseline-discord" />
            </a>
          </div>
        </div>
      </div>

      <div class="relative hidden md:block">
        <div
          class="absolute inset-0 bg-gradient-to-br from-pearl-bush-300/30 to-transparent rounded-lg transform rotate-6 scale-105"
        ></div>
        <img
          :src="image"
          :alt="name"
          width="316"
          height="316"
          class="relative rounded-lg object-cover shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-xl"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { name, description, linkedin, instagram, github, image, discord } =
  defineProps([
    "name",
    "description",
    "linkedin",
    "github",
    "instagram",
    "image",
    "discord",
  ]);
</script>

<style>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-in-out forwards;
}
</style>
