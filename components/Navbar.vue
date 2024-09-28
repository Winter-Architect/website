<template>
  <nav
    class="bg-pearl-bush-100 text-[#0A0908] p-5 mb-10 m-5 rounded-md flex items-center justify-between"
  >
    <div class="flex items-center justify-evenly w-[20vw] xl:w-[10vw]">
      <img src="/logo_dark_bold.png" alt="logo" width="45" height="45" />
      <h1 class="font-bold">Winter Architect</h1>
    </div>
    <div>
      <ul class="flex items-center justify-evenly w-[50vw] xl:w-[40vw]">
        <li class="ext-[#0A0908] font-semibold">
          <NuxtLink to="/">Acceuil</NuxtLink>
        </li>
        <li class="font-semibold">
          <NuxtLink to="team">Notre équipe</NuxtLink>
        </li>
        <li class="font-semibold">
          <NuxtLink to="projects">Nos projets</NuxtLink>
        </li>
        <li class="font-semibold">
          <NuxtLink to="story">Notre histoire</NuxtLink>
        </li>
        <!-- <li class="text-[#0A0908] font-semibold">Contact</li> -->
      </ul>
    </div>
  </nav>
</template>
