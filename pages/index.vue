<template>
  <div>
    <h2 class="font-bold text-white uppercase text-lg my-6">All Projects</h2>
    <div class="grid grid-cols-4 gap-6">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<script>
import { deserializeData } from "~~/util/helpers";

export default {
  data() {
    return {
      projects: null,
    };
  },
  async mounted() {
    const response = await fetch("/api/projects");
    const json = await response.json();
    this.projects = deserializeData(json);
  },
};
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
