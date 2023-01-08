<template>
  <div>
    <header class="shadow-sm bg-white">
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

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
