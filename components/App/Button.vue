<script setup lang="ts">
interface Props {
  btnType?: 'primary'
  btnOutline?: string // Expected 'primary-outline'
  btnText: string
  iconName?: string
  sizes?: string // Expected 'sm' 'md' 'lg' 'xl'
}
const props = defineProps<Props>()
</script>

<template>
  <button
    type="button"
    :class="`${
      props.btnOutline === 'primary-outline'
        ? 'bg-transparent border-[.1rem] '
        : 'bg-primary text-white'
    }  ${props.sizes === 'md' ? ' py-[1.45rem] w-[21.0rem]' : null} ${
      props.sizes === 'lg' ? 'py-[1.2rem] w-[30rem]' : null
    } ${props.sizes === 'xl' ? 'py-[1.5rem] w-[40rem]' : null} ${
      props.iconName ? 'flex items-center' : null
    } border-primary text-primary py-[.75rem] px-[1.2rem] rounded-full focus:outline-none font-rubik`"
  >
    <AppIcon
      v-if="props.iconName"
      :icon-name="props.iconName"
      class="mr-[1.67rem]"
    />
    {{ props.btnText }}
  </button>
</template>
