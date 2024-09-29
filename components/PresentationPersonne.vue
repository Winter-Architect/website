<template>
  <div class="flex text-pearl-bush-950 justify-evenly m-10 flex-wrap">
    <div
      class="bg-pearl-bush-100 p-12 w-[80vw] rounded-md flex justify-between transition-all duration-500 ease-in-out hover:shadow-lg transform hover:scale-[1.02]"
    >
      <div class="max-w-[40vw] opacity-0 animate-fadeIn">
        <h1 class="font-bold text-2xl pb-3">Jean Bernard</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          voluptatibus vitae cupiditate consequuntur animi voluptatem reiciendis
          necessitatibus. Illo, explicabo deserunt ratione itaque consequuntur
          ducimus animi architecto maiores cumque nostrum soluta.<br /><br />
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          voluptatibus vitae cupiditate consequuntur animi voluptatem reiciendis
          necessitatibus. Illo, explicabo deserunt ratione itaque consequuntur
          ducimus animi architecto maiores cumque nostrum soluta.
        </p>
        <div class="flex w-[25%] pt-5 text-3xl justify-between">
          <a
            href="https://www.linkedin.com/in/jean-bernard-architecte"
            class="transition-transform duration-300 ease-in-out hover:scale-125 hover:text-blue-500"
          >
            <UIcon name="i-logos-linkedin-icon" />
          </a>
          <a
            href="https://www.facebook.com/jean-bernard-architecte"
            class="transition-transform duration-300 ease-in-out hover:scale-125 hover:text-blue-700"
          >
            <UIcon name="i-logos-facebook" />
          </a>
          <a
            href="https://www.instagram.com/jean-bernard-architecte"
            class="transition-transform duration-300 ease-in-out hover:scale-125 hover:text-pink-500"
          >
            <UIcon name="i-skill-icons-instagram" />
          </a>
        </div>
      </div>
      <img
        src="https://thispersondoesnotexist.com/"
        alt="personne"
        width="316"
        height="316"
        class="rounded-lg transition-transform duration-500 ease-in-out hover:scale-110"
      />
    </div>
  </div>
</template>

<style>
/* Keyframes for fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fadeIn {
  animation: fadeIn 1s ease-in-out forwards;
}
</style>
