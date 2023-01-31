<template>
  <div
    class="shadow-md bg-gradient-to-r from-primary1 to-primary2 mb-6 rounded-md p-0.5 text-white"
  >
    <div class="bg-dark2 p-5 rounded flex items-end">
      <div>
        <h3 class="font-bold text-xl mb-4">
          {{ title }}
        </h3>

        <span className="capitalize font-semibold">feedback board</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const { title } = defineProps(["title"]);
</script>
