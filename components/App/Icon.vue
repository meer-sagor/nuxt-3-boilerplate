<script setup lang="ts">
import { Icon } from '@iconify/vue'
interface Props {
  iconName: string
}
const props = defineProps<Props>()
</script>
<template>

    <Icon :icon="props.iconName" class="text-black text-[2rem]" />

</template>
