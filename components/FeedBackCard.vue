<template>
  <div
    class="max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex space-x-6 items-center">
      <Vote />

      <div>
        <h5
          class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Add tags for solutions
        </h5>

        <p class="text-sm mb-4 font-normal text-gray-700 dark:text-gray-400">
          Easier to search for solutions based on a specific stack. Here are the
          biggest enterprise technology acquisitions of 2021 so far, in reverse
          chronological order.
        </p>
        <Category category="enhancement" />
      </div>
    </div>
  </div>
</template>
