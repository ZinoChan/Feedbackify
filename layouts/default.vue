<template>
  <div>
    <header class="shadow-sm bg-dark2 shadow-dark2 border-b border-gray2">
      <nav class="container mx-auto p-4 flex items-center justify-between">
        <NuxtLink to="/" class="font-bold text-white">Feedbackify</NuxtLink>
        <ul class="flex items-center gap-4">
          <li>
            <NuxtLink to="/roadmap">
              <button class="btn btn-primary">login</button>
            </NuxtLink>
          </li>
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
