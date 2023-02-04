<template>
  <div class="mt-10 max-w-screen-lg mx-auto px-4 y-6">
    <div class="items-start grid grid-cols-4 gap-8">
      <div>
        <ProductCard :title="projectData?.project?.name" />
        <CategoryList />
      </div>
      <div class="col-span-3">
        <FeedbackHeader :slug="projectData?.project?.slug" />
        <FeedBackCard
          v-for="feedback in projectData?.feedbacks"
          :feedback="feedback"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const { slug } = useRoute().params;
const { category } = useCategory();
const queryString = computed(() => {
  let values = "?category=" + category.value;
  return values;
});

const {
  data: projectData,
  pending,
  refresh,
} = await useLazyAsyncData("projectData", () =>
  $fetch(`/api/project/${slug}${queryString.value}`)
);

// When query string changes, refresh
watch(
  () => queryString.value,
  () => refresh()
);
</script>
