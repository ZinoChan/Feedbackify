<template>
  <div class="bg-white rounded p-6">
    <h4 class="font-bold">
      {{ comments?.length || 0 }} Comments

      <Comment v-for="(comment, id) in comments" :key="id" :comment="comment" />
    </h4>
  </div>
</template>

<script setup>
const { comments } = defineProps(["comments"]);
</script>
