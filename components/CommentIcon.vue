<template>
  <div class="flex space-x-2 items-center">
    <Icon class="text-xl text-primary1" name="ant-design:comment-outlined" />
    <span class="font-bold text-sm text-gray-50">
      {{ commentsCount ? commentsCount : 0 }}
    </span>
  </div>
</template>

<script setup>
const { commentsCount } = defineProps(["commentsCount"]);
</script>
