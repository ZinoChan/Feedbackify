<template>
  <div class="rounded-lg bg-dark1 p-2 flex flex-col justify-between">
    <span class="font-bold text-sm text-primary2">
      {{ count ? count : 0 }}
    </span>
  </div>
</template>
<script setup>
const { count } = defineProps(["count"]);
</script>
