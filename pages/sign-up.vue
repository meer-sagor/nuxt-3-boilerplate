<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
const showPassword = ref(false)
const handleSignUp = () => {}
</script>
<template>
  <div class="w-[52.0rem] m-auto mt-[10rem]">
    <h3 class="text-center mb-[4rem]">Sign Up</h3>
    <form @submit.prevent="handleSignUp">
      <AppFormInput placeholder="User name" />
      <AppFormInput
        placeholder="Email address"
        type="email"
        class="mt-[1.6rem] mb-[1.6rem]"
      />
      <div class="relative">
        <AppFormInput
          placeholder="Password"
          :type="showPassword ? 'text' : 'password'"
        />
        <AppIcon
          :icon-name="showPassword ? 'charm:eye' : 'charm:eye-slash'"
          class="cursor-pointer text-[#C4C4C4] absolute top-[1.5rem] right-[2rem]"
          @click="showPassword = !showPassword"
        />
      </div>
      <AppButton btn-text="Sign Up" class="w-full mt-[2rem]" />
    </form>
  </div>
</template>