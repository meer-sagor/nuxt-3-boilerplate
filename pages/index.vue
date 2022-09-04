<script setup lang="ts">
const name = ref('')
</script>
<template>
  <section>
    <Head>
      <Title>Home Page</Title>
    </Head>
    <h1 class="text-center text-primary">Home page</h1>
    <AppButton btn-text="Continue with default" />
    <br />
    <br />
    <AppButton
      btn-text="Continue with default outline"
      btn-outline="primary-outline"
    />
    <br />
    <br />
    <AppButton btn-text="Continue with size md" sizes="md" />

    <br />
    <br />
    <AppButton
      btn-text="Continue with size md"
      sizes="md"
      btn-outline="primary-outline"
    />

    <br />
    <br />
    <AppButton btn-text="Continue with size lg" sizes="lg" />

    <br />
    <br />
    <AppButton
      btn-text="Continue with size lg"
      sizes="lg"
      btn-outline="primary-outline"
    />

    <br />
    <br />
    <AppButton btn-text="Continue with size xl" sizes="xl" />

    <br />
    <br />
    <AppButton
      btn-text="Continue with size xl"
      sizes="xl"
      btn-outline="primary-outline"
    />
    <br />
    <br />

    <AppButton
      class="bg-gray text-black py-[.9rem]"
      icon-name="eva:arrow-back-fill"
      btn-text="Dashboard"
    />
    <br />
    <br />
    <AppFormInput v-model="name" placeholder="User name" />
  </section>
</template>
