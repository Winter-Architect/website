<template>
  <section id="games" class="bg-[#1B2A31] w-full mt-[10vh] text-white">
    <div class="w-[80vw] mx-auto">
      <h1 class="text-4xl font-bold text-center my-10">Nos jeux</h1>

      <div
        class="px-6 py-16 flex flex-col lg:flex-row items-center justify-evenly"
      >
        <img
          src="https://placehold.co/535x340"
          alt=""
          class="rounded-lg shadow-lg w-[20vw] h-[15vw] object-cover object-center"
        />
        <div class="lg:w-1/2 lg:pl-12 mt-10 lg:mt-0">
          <h1 class="text-[36px]">Blackout</h1>
          <p class="text-[16px] my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            accusantium vitae maxime molestiae recusandae culpa voluptas! Id
            dolorum a possimus. Ad doloremque possimus ex fugit eius neque
            nulla? Accusamus delectus accusantium quis eveniet repudiandae fuga!
          </p>
          <Button>Téléchargez le jeu!</Button>
        </div>
      </div>

      <div class="my-10">
        <h1 class="font-bold text-3xl">STATISTIQUES</h1>
        <div class="flex justify-evenly my-10">
          <Stat nb="10" text="téléchargements" />
          <Stat nb="82" text="documents obtenus" />
          <Stat nb="3" text="joueurs connecté" />
        </div>
        <div class="h-[0.8px] w-[80vw] bg-pearl-bush-350" />
      </div>
      <div class="my-10 mt-20">
        <h1 class="font-bold text-3xl my-10">TIMELINE</h1>
        <Timeline />
      </div>
    </div>
  </section>
</template>
