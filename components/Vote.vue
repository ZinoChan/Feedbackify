<template>
  <div class="rounded-lg bg-gray-50 p-2 flex flex-col justify-between">
    <span class="font-bold text-sm text-teal-400">
      {{ count ? count : 0 }}
    </span>
  </div>
</template>
<script setup>
const { count } = defineProps(["count"]);
</script>
