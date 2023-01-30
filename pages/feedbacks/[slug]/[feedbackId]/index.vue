<template>
  <div class="max-w-screen-md mx-auto">
    <div
      class="mb-6 bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600"
    >
      <div
        class="container flex flex-wrap items-center justify-between mx-auto"
      >
        <button class="flex space-x-2 items-center">
          <Icon
            class="text-lg text-gray-700"
            name="ic:outline-arrow-back-ios"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >
            back
          </span>
        </button>
        <div class="flex md:order-2">
          <NuxtLink :to="`/feedbacks/${slug}/${feedbackId}/edit`">
            <button type="button" class="btn-primary">Edit feedback</button>
          </NuxtLink>
        </div>
      </div>
    </div>

    <FeedBackCard :feedback="feedback" />
    <CommentList :comments="feedback.comments" />
    <AddComment />
  </div>
</template>

<script setup>
const { slug, feedbackId } = useRoute().params;
const { data: feedback } = useFetch(`/api/project/${slug}/${feedbackId}`);
</script>
