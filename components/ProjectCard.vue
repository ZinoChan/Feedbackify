<template>
  <div
    class="bg-dark2 shadow-md overflow-hidden p-6 flex flex-col rounded-md relative"
  >
    <div
      class="absolute bg-primary1 bg-gradient-to-r from-primary1 to-primary2 top-0 left-0 w-full h-1"
    ></div>
    <h3
      class="font-bold text-2xl text-transparent uppercase bg-clip-text bg-gradient-to-r from-primary1 to-primary2 mb-4"
    >
      {{ project.name }}
    </h3>
    <p class="mb-4 capitalize text-sm text-gray1">
      {{ project.description }}
    </p>
    <div class="flex flex-wrap gap-x-1 gap-y-2 mb-4">
      <span
        v-for="tool in project.tools"
        class="p-1 rounded text-xs text-primary2 border border-primary2 font-semibold"
      >
        {{ tool }}
      </span>
    </div>
    <div class="mt-auto flex justify-between items-center">
      <NuxtLink :to="`/feedbacks/${project.slug}`">
        <div
          class="flex space-x-1 text-sm font-bold text-primary1 hover:text-primary2 hover:underline"
        >
          <span>
            {{ project?.feedbacks?.length || 0 }}
          </span>
          <span>feedbacks</span>
        </div>
      </NuxtLink>
      <div class="text-primary1 space-x-3">
        <NuxtLink
          class="hover:text-primary2 hover:underline flex items-center space-x-2"
          :to="project.linkToPage"
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
