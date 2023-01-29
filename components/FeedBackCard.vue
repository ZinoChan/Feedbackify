<template>
  <NuxtLink :to="`/feedbacks/${params.slug}/${feedback?.id}`">
    <div
      class="mb-6 w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex space-x-8 items-center justify-between">
        <div class="flex items-center space-x-6">
          <Vote :count="feedback?.upvotes" />
          <div>
            <h5
              class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ feedback?.title }}
            </h5>

            <p
              class="text-sm mb-4 font-normal text-gray-700 dark:text-gray-400"
            >
              {{ feedback?.description }}
            </p>
            <Category :category="feedback?.category" />
          </div>
        </div>
        <CommentIcon :commentsCount="feedback?.comments?.length" />
      </div>
    </div>
  </NuxtLink>
</template>
<script setup>
const { feedback } = defineProps(["feedback"]);
const params = useRoute().params;
</script>
