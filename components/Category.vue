<template>
  <span
    :class="category"
    class="text-xs font-bold capitalize bg-opacity-10 mr-2 px-2 py-1 rounded-md border"
  >
    {{ category }}
  </span>
</template>

<script setup>
const { category } = defineProps(["category"]);
</script>
