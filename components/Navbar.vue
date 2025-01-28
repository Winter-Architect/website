<template>
  <nav
    class="w-full bg-transparent z-50 text-[#0A0908] p-5 mb-10 font-clash-display hidden md:block"
  >
    <!-- En-tête fixe avec Logo et Bouton -->
    <div class="flex items-center justify-around rounded-b-md">
      <NuxtLink
        to="/"
        class="flex items-center space-x-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
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
      <div
        class="flex items-center space-x-5 text-pearl-bush-100 md:text-lg lg:text-xl"
      >
        <a href="#" class="cursor-pointer hover:font-bold"> Acceuil </a>
        <a href="#quisommesnous" class="cursor-pointer hover:font-bold"
          >Qui sommes nous</a
        >
        <a href="#games" class="cursor-pointer hover:font-bold">Nos jeux</a>
        <a href="#story" class="cursor-pointer hover:font-bold"
          >Notre histoire</a
        >
      </div>
      <Button>Get Started</Button>
    </div>
  </nav>
</template>
