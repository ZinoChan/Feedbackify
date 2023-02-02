<template>
  <button
    :class="category"
    @click="setCategory(category)"
    class="text-xs font-bold capitalize bg-opacity-10 mr-2 px-2 py-1 rounded-md border"
  >
    {{ category }}
  </button>
</template>

<script setup>
const { setCategory } = useCategory();
const { category } = defineProps(["category"]);
</script>
