<template>
  <div class="flex flex-col items-center">
    <h1 class="text-[10vh]">{{ displayedNb }}</h1>
    <p class="text-xl">{{ text }}</p>
  </div>
</template>

<script setup>
const { nb, text } = defineProps(["nb", "text"]);

// Variable to display the current number
const displayedNb = ref(0);

// Animation speed (milliseconds between increments)
const animationSpeed = 50; // Adjust this value for slower or faster animations

// Increment the number smoothly
onMounted(() => {
  const interval = setInterval(() => {
    if (displayedNb.value < nb) {
      displayedNb.value += Math.ceil(nb / 100); // Adjust the step size
    } else {
      displayedNb.value = nb; // Ensure the exact value is reached
      clearInterval(interval);
    }
  }, animationSpeed);
});
</script>
