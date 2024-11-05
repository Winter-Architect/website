<template>
  <nav
    class="fixed w-[100vw] z-50 bg-pearl-bush-100 text-[#0A0908] p-5 mb-10 rounded-b-md transition-all duration-500 ease-in-out hover:shadow-md"
  >
    <!-- En-tête fixe avec Logo et Bouton -->
    <div class="flex items-center justify-between rounded-b-md">
      <NuxtLink
        to="/"
        class="flex items-center space-x-2 transform transition-transform duration-300 ease-in-out hover:scale-110"
      >
        <img src="/logo_dark_bold.png" alt="logo" width="45" height="45" />
        <h1 class="font-bold">Winter Architect</h1>
      </NuxtLink>

      <!-- Bouton Menu Mobile -->
      <button
        @click="toggleMenu"
        class="lg:hidden focus:outline-none p-2 rounded-md hover:bg-gray-200 transition-colors duration-200"
        aria-label="Toggle Menu"
      >
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <span
            class="w-full h-0.5 bg-gray-800 rounded-full transform transition-all duration-300"
            :class="{ 'rotate-45 translate-y-2': isOpen }"
          ></span>
          <span
            class="w-full h-0.5 bg-gray-800 rounded-full transition-all duration-300"
            :class="{ 'opacity-0': isOpen }"
          ></span>
          <span
            class="w-full h-0.5 bg-gray-800 rounded-full transform transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-2': isOpen }"
          ></span>
        </div>
      </button>
      <!-- navbar pc -->
      <ul
        class="md:flex hidden items-center justify-end space-y-0 space-x-8 py-2 mr-5"
      >
        <li class="text-[#0A0908] font-semibold">
          <NuxtLink
            to="/"
            :class="{
              'text-outer-space-900 underline underline-offset-8':
                $route.path === '/',
            }"
            class="relative block transition-all duration-300 ease-in-out hover:text-outer-space-900 hover:underline hover:underline-offset-8"
            @click="closeMenu"
          >
            Accueil
          </NuxtLink>
        </li>
        <li class="font-semibold">
          <NuxtLink
            to="/team"
            :class="{
              'text-outer-space-900 underline underline-offset-8':
                $route.path === '/team',
            }"
            class="relative block transition-all duration-300 ease-in-out hover:text-outer-space-900 hover:underline hover:underline-offset-8"
            @click="closeMenu"
          >
            Notre équipe
          </NuxtLink>
        </li>
        <li class="font-semibold">
          <NuxtLink
            to="/games"
            :class="{
              'text-outer-space-900 underline underline-offset-8':
                $route.path === '/games',
            }"
            class="relative block transition-all duration-300 ease-in-out hover:text-outer-space-900 hover:underline hover:underline-offset-8"
            @click="closeMenu"
          >
            Nos jeux
          </NuxtLink>
        </li>
        <li class="font-semibold">
          <NuxtLink
            to="/story"
            :class="{
              'text-outer-space-900 underline underline-offset-8':
                $route.path === '/story',
            }"
            class="relative block transition-all duration-300 ease-in-out hover:text-outer-space-900 hover:underline hover:underline-offset-8"
            @click="closeMenu"
          >
            Notre histoire
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- navbar mobile -->
    <div
      class="lg:block lg:mt-0 overflow-hidden transition-all duration-300 ease-in-out"
      :style="{
        maxHeight: isOpen ? `${menuHeight}px` : '0px',
        opacity: isOpen ? '1' : '0',
        visibility: isOpen ? 'visible' : 'hidden',
        marginTop: isOpen ? '1rem' : '0',
      }"
      ref="menuRef"
    >
      <ul
        class="flex flex-col lg:flex-row lg:items-center lg:justify-end space-y-4 lg:space-y-0 lg:space-x-8 py-2"
      >
        <li class="text-[#0A0908] font-semibold">
          <NuxtLink
            to="/"
            :class="{
              'text-outer-space-900 underline underline-offset-8':
                $route.path === '/',
            }"
            class="relative block transition-all duration-300 ease-in-out hover:text-outer-space-900 hover:underline hover:underline-offset-8"
            @click="closeMenu"
          >
            Accueil
          </NuxtLink>
        </li>
        <li class="font-semibold">
          <NuxtLink
            to="/team"
            :class="{
              'text-outer-space-900 underline underline-offset-8':
                $route.path === '/team',
            }"
            class="relative block transition-all duration-300 ease-in-out hover:text-outer-space-900 hover:underline hover:underline-offset-8"
            @click="closeMenu"
          >
            Notre équipe
          </NuxtLink>
        </li>
        <li class="font-semibold">
          <NuxtLink
            to="/games"
            :class="{
              'text-outer-space-900 underline underline-offset-8':
                $route.path === '/games',
            }"
            class="relative block transition-all duration-300 ease-in-out hover:text-outer-space-900 hover:underline hover:underline-offset-8"
            @click="closeMenu"
          >
            Nos jeux
          </NuxtLink>
        </li>
        <li class="font-semibold">
          <NuxtLink
            to="/story"
            :class="{
              'text-outer-space-900 underline underline-offset-8':
                $route.path === '/story',
            }"
            class="relative block transition-all duration-300 ease-in-out hover:text-outer-space-900 hover:underline hover:underline-offset-8"
            @click="closeMenu"
          >
            Notre histoire
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false);
const menuRef = ref(null);
const menuHeight = ref(0);

// Calcule la hauteur du menu pour l'animation
const updateMenuHeight = () => {
  if (menuRef.value) {
    menuHeight.value = menuRef.value.scrollHeight;
  }
};

// Toggle menu avec mise à jour de la hauteur
const toggleMenu = () => {
  if (!isOpen.value) {
    isOpen.value = true;
    nextTick(() => {
      updateMenuHeight();
    });
  } else {
    isOpen.value = false;
  }
};

// Ferme le menu (utile pour les liens)
const closeMenu = () => {
  isOpen.value = false;
};

// Met à jour la hauteur si la fenêtre est redimensionnée
onMounted(() => {
  window.addEventListener("resize", updateMenuHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateMenuHeight);
});

// Initialise la hauteur
onMounted(() => {
  updateMenuHeight();
});
</script>
