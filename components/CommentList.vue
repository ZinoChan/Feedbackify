<template>
  <div class="bg-dark2 border border-gray2 rounded p-6">
    <h4 class="font-bold text-white mb-4">
      {{ comments?.length || 0 }} Comments
    </h4>

    <Comment v-for="(comment, id) in comments" :key="id" :comment="comment" />
  </div>
</template>

<script setup>
const { comments } = defineProps(["comments"]);
</script>
