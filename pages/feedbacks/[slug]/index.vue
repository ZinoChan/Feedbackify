<template>
  <div class="max-w-screen-lg mx-auto px-4 y-6">
    <div class="items-start grid grid-cols-4 gap-8">
      <div>
        <ProductCard :title="project.name" />
        <CategoryList />
      </div>
      <div class="col-span-3">
        <FeedbackHeader />
        <FeedBackCard
          v-for="feedback in project.feedbacks"
          :feedback="feedback"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const { slug } = useRoute().params;

const { data: project } = await useFetch(`/api/project/${slug}`);
</script>
