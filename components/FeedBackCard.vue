<template>
  <NuxtLink :to="`/feedbacks/${params.slug}/${feedback?.id}`">
    <div
      class="mb-6 w-full p-6 bg-dark2 border border-gray2 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex space-x-8 items-center justify-between">
        <div class="flex items-center space-x-6">
          <Vote :count="feedback?.upvotes" />
          <div>
            <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-100">
              {{ feedback?.title }}
            </h5>

            <p class="text-sm mb-4 font-normal text-gray-200">
              {{ feedback?.description }}
            </p>
            <Category :category="feedback?.category" />
          </div>
        </div>
        <CommentIcon :commentsCount="commentsCount" />
      </div>
    </div>
  </NuxtLink>
</template>
<script setup>
const { feedback, commentsCount } = defineProps(["feedback", "commentsCount"]);
const params = useRoute().params;
</script>
