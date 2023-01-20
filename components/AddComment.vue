<template>
  <div class="bg-white p-6 mt-8 rounded-lg shadow-md">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
        Add Comment
      </h2>
    </div>

    <form class="mb-6">
      <div
        class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
      >
        <label for="comment" class="sr-only">Your comment</label>
        <textarea
          id="comment"
          rows="6"
          class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <button type="submit" class="btn-primary">Post comment</button>
    </form>
  </div>
</template>
