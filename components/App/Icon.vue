<script setup lang="ts">
import { Icon } from '@iconify/vue'
interface Props {
  iconName: string
}
const props = defineProps<Props>()
</script>
<template>
  <span>
    <Icon :icon="props.iconName" />
  </span>
</template>
