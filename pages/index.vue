<template>
  <div class="text-white max-w-full overflow-x-hidden font-clash">
    <div class="flex flex-col items-center mt-[6vh]">
      <h1
        class="text-[4rem] md:text-[4rem] mt-[10vh] font-bold text-center font-orbitron"
      >
        Winter Architect
      </h1>
      <Button
        variant="outline"
        class="mt-5"
        @click="DownloadClicked"
        to="https://github.com/Winter-Architect/blackout/releases"
        >Download our game</Button
      >
      <div
        class="h-[10vh] w-[100vw] overflow-hidden mt-[20vh] bg-[#1B2A31] flex text-xl font-bold justify-around items-center text-white"
      >
        <p class="hidden md:block">Students</p>
        <img src="/icons/star.svg" alt="Star" class="h-[4vh]" />
        <p class="hidden md:block">GameDevelopers</p>
        <img src="/icons/star.svg" alt="Star" class="h-[4vh]" />
        <p class="hidden md:block">TeamWork</p>
        <img src="/icons/star.svg" alt="Star" class="h-[4vh]" />
        <p class="hidden md:block">jspquoimettre</p>
      </div>
      <QuiSommesNous />
      <Games />
      <Team />
      <Story />
      <NuxtLink
        to="/"
        class="flex items-center transform transition-transform duration-300 ease-in-out hover:scale-110 mt-[10vh]"
      >
        <img src="/logo_light_bold.png" alt="logo" width="45" height="45" />
        <div class="flex flex-col">
          <h1 class="font-bold md:text-xl lg:text-2xl text-pearl-bush-100">
            Winter
          </h1>
          <h1 class="font-bold md:text-xl lg:text-2xl text-pearl-bush-300">
            Architect
          </h1>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const clicked = ref(false);

async function DownloadClicked() {
  if (clicked.value) return;
  clicked.value = true;
  await fetch("https://api.nocteln.fr/blackout/download", {
    method: "POST",
  });
  await navigateTo("https://github.com/Winter-Architect/blackout/releases", {
    external: true,
  });
}
</script>
