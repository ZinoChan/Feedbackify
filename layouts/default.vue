<template>
  <div>
    <header class="shadow-sm bg-dark2 shadow-dark2 border-b border-gray2">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Rebyu</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Projects</NuxtLink></li>
          <li><NuxtLink to="/roadmap">Roadmap</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "bg-dark1",
  },
});
</script>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
