<script setup lang="ts">
const counter = ref(1)
const updateCounter = () => {
  console.log('you Click here')
  counter.value++
}
</script>
<template>
  <div class="text-center flex flex-col items-center justify-center h-[100vh]">
    <h1>Welcome to Nuxt-3 linter Boilerplate <Icon name="uil:github" /></h1>
    <Icon name="NuxtIcon" size="28" />
    <button type="button" @click="updateCounter">counter: {{ counter }}</button>
  </div>
</template>
