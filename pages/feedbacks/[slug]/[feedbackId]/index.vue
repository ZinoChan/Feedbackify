<template>
  <div class="mt-10 max-w-screen-md mx-auto">
    <div
      class="mb-6 bg-dark2 rounded-md px-2 sm:px-4 py-2.5 border border-gray2"
    >
      <div
        class="container flex flex-wrap items-center justify-between mx-auto"
      >
        <button class="flex space-x-2 items-center">
          <Icon
            class="text-lg text-gray-100"
            name="ic:outline-arrow-back-ios"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap text-white"
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

    <FeedBackCard
      :feedback="feedbackData?.feedback"
      :commentsCount="feedbackData?.comments?.length || 0"
    />
    <CommentList :comments="feedbackData?.comments" />
    <AddComment />
  </div>
</template>

<script setup>
const { slug, feedbackId } = useRoute().params;
const { data: feedbackData } = useFetch(`/api/project/${slug}/${feedbackId}`);
</script>
