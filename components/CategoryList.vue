<template>
  <div class="bg-dark2 border border-gray2 rounded-lg p-6 shadow-md">
    <div class="flex gap-y-3 flex-wrap align-baseline">
      <Category v-for="cat in categories" :category="cat" />
      <button
        @click="setCategory('')"
        class="text-xs text-white bg-white border-white font-bold capitalize bg-opacity-10 mr-2 px-2 py-1 rounded-md border"
      >
        All
      </button>
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
<script setup lang="ts">
const { setCategory } = useCategory();
</script>
