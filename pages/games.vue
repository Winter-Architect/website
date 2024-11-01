<template>
  <div class="flex flex-col items-center p-10">
    <h1 class="text-3xl font-bold text-pearl-bush-100 pb-12">Nos Jeux</h1>

    <div
      class="w-[90vw] text-outer-space-900 bg-pearl-bush-100 p-5 flex flex-col items-center"
    >
      <div class="flex">
        <img src="https://placehold.co/500x300" alt="placeholder" />
        <div class="m-5">
          <h1 class="text-3xl font-semibold pb-5">Blackout</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ab
            vel similique in dolorem. Saepe?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ab
            vel similique in dolorem. Saepe?
          </p>
          <Button>Download now!</Button>
        </div>
      </div>
      <Statistiques />
      <Timeline />
      <Ressources />
      <div class="flex flex-wrap gap-10 items-center justify-center pt-10">
        <Button to="https://example.com">Jouez dès maintenant!</Button>
        <Button pdfUrl="/docs/FINAL.pdf"
          >Téléchargez le cahier des charges</Button
        >
      </div>
    </div>
  </div>

  <!-- https://placehold.co/600x400 -->
</template>
