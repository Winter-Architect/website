<template>
  <nav
    class="bg-pearl-bush-100 text-[#0A0908] p-5 mb-10 rounded-b-md flex items-center justify-between transition-all duration-500 ease-in-out hover:shadow-md"
  >
    <NuxtLink
      to="/"
      class="flex items-center justify-evenly w-[20vw] xl:w-[10vw] transform transition-transform duration-300 ease-in-out hover:scale-110"
    >
      <img src="/logo_dark_bold.png" alt="logo" width="45" height="45" />
      <h1 class="font-bold">Winter Architect</h1>
    </NuxtLink>
    <div>
      <ul class="flex items-center justify-evenly w-[50vw] xl:w-[40vw]">
        <li class="text-[#0A0908] font-semibold">
          <NuxtLink
            to="/"
            :class="{
              'text-outer-space-900 underline underline-offset-8':
                $route.path === '/',
            }"
            class="relative transition-all duration-300 ease-in-out hover:text-outer-space-900 hover:underline hover:underline-offset-8"
          >
            Acceuil
          </NuxtLink>
        </li>
        <li class="font-semibold">
          <NuxtLink
            to="/team"
            :class="{
              'text-outer-space-900 underline underline-offset-8':
                $route.path === '/team',
            }"
            class="relative transition-all duration-300 ease-in-out hover:text-outer-space-900 hover:underline hover:underline-offset-8"
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
            class="relative transition-all duration-300 ease-in-out hover:text-outer-space-900 hover:underline hover:underline-offset-8"
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
            class="relative transition-all duration-300 ease-in-out hover:text-outer-space-900 hover:underline hover:underline-offset-8"
          >
            Notre histoire
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
