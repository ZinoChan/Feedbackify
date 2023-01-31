<template>
  <div class="bg-dark2 border border-gray2 rounded-lg p-6 shadow-md">
    <div class="flex gap-y-3 flex-wrap align-baseline">
      <Category v-for="cat in categories" :category="cat" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      categories: ["enhancement", "feature", "bug", "ui", "ux"],
    };
  },
};
</script>
