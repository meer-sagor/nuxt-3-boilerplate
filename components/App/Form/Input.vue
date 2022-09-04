<script setup lang="ts">
interface Props {
  type?: string
  label?: string
  placeholder?: string
  inputClass?: string
  labelClass?: string
  modelValue?: string
}
const props = defineProps<Props>()
const inputChangeHandler = (event: Event) =>
  (event.target as HTMLButtonElement).value
</script>
<template>
  <div>
    <label :for="props.label" :class="props.labelClass">{{
      props.label
    }}</label>
    <input
      :type="props.type ? props.type : 'text'"
      :name="props.label"
      class="border-[.1rem] border-darkGray rounded-full px-[1.6rem] py-[1.1rem] text-black placeholder-black font-nunito w-full focus:outline-none"
      :class="props.inputClass"
      :placeholder="props.placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', inputChangeHandler($event))"
    />
  </div>
</template>
