<template>
  <div>
    <h2>Home</h2>
    <div class="grid grid-cols-4 gap-6">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<script setup>
const { data: projects } = await useFetch("/api/projects");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
