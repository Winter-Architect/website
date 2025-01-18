<template>
  <div class="bg-[#22333B] min-h-screen">
    <Navbar />
    <div class="flex flex-col items-center">
      <slot />
    </div>
  </div>
</template>

<script setup>
const emojis = ref([]);

function spawnNeige() {
  setTimeout(() => {
    const emoji = document.createElement("div");
    emoji.textContent = "❄️";
    emoji.classList.add("emoji-animation");
    emoji.style.position = "fixed";
    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.top = "-100px";
    emoji.style.fontSize = `${Math.random() * 20 + 20}px`;
    emoji.style.pointerEvents = "none";
    emoji.style.zIndex = "9999";
    document.body.appendChild(emoji);

    anime({
      targets: emoji,
      translateY: window.innerHeight + 20,
      rotate: 360,
      opacity: [1, 0],
      duration: 6000,
      easing: "easeInQuad",
      complete: () => {
        document.body.removeChild(emoji);
      },
    });
  }, 100);
}

// Cleanup function to remove any remaining emojis when component is unmounted
function cleanup() {
  document.querySelectorAll(".emoji-animation").forEach((el) => el.remove());
}

onMounted(() => {
  // Add anime.js script to the document
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js";
  script.async = true;
  document.head.appendChild(script);
  // setInterval(spawnNeige, 3000);
});

onUnmounted(cleanup);
</script>

<style>
/* @keyframes tourne {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} */
.emoji-animation {
  filter: grayscale(100%);
  pointer-events: none;
  z-index: 9999;
  animation: tourne 5s linear;
}
</style>
