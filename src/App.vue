<script setup>
import TheForm from "./components/TheForm.vue";
import TheIntro from "./components/TheIntro.vue";
</script>

<template>
  <main>
    <div
      class="sm:grid sm:grid-cols-2 min-h-screen bg-main bg-primary-red"
    >
      <TheIntro></TheIntro>
      <TheForm></TheForm>
    </div>
  </main>

  <!-- <footer>
    <p class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Your Name Here</a>.
    </p>
  </footer> -->
</template>
