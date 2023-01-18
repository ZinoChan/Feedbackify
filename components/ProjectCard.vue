<template>
  <div
    class="bg-white p-6 flex flex-col rounded-md shadow border border-t-4 border-teal-300"
  >
    <h3 class="font-bold text-2xl uppercase text-gray-600 mb-4">
      {{ project.name }}
    </h3>
    <p class="mb-4 capitalize text-sm text-gray-400">
      {{ project.description }}
    </p>
    <div class="flex flex-wrap mb-4">
      <span
        v-for="tool in project.tools"
        class="p-1 mr-1 mb-1 rounded-md text-xs bg-teal-50 text-teal-400 font-bold"
      >
        {{ tool }}
      </span>
    </div>
    <div class="mt-auto flex justify-between items-center">
      <NuxtLink to="/feedbacks/{{ project.slug }}">
        <div class="flex space-x-3 text-sm font-bold text-gray-600">
          <span>34</span>
          <span>feedbacks</span>
        </div>
      </NuxtLink>
      <div class="text-gray-600 space-x-3">
        <NuxtLink
          class="hover:text-cyan-500 flex items-center space-x-2"
          to="{{project.linkToPage}}"
          target="_blank"
        >
          <span class="text-xs font-bold">view</span>
          <Icon class="text-xl" name="ci:external-link" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { project } = defineProps(["project"]);
</script>
