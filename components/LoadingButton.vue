<template>
  <button
    class="relative btn btn-primary w-full"
    :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
    :disabled="isLoading"
    type="submit"
  >
    <span v-if="!isLoading" class="-ml-1 mr-2">
      <Icon name="heroicons:arrow-path" class="h-5 w-5" />
    </span>
    <span v-else class="-ml-1 mr-2">
      <Icon name="heroicons:arrow-path-solid" class="animate-spin h-5 w-5" />
    </span>
    <span>{{ label }}</span>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "Refresh",
    },
  },
};
</script>
