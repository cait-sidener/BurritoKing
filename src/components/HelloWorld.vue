<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="white">{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Elrio';
  font-weight: 500;
  font-size: 8rem;
  position: relative;
  /* top: 15px; */
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  color: #fff;
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
