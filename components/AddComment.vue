<template>
  <div class="bg-dark2 p-6 mt-8 rounded-lg shadow-md">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg lg:text-2xl font-bold text-white">Add Comment</h2>
    </div>

    <form class="mb-6">
      <div
        class="py-2 px-4 mb-4 bg-dark1 rounded-lg rounded-t-lg border border-gray2"
      >
        <label for="comment" class="sr-only">Your comment</label>
        <textarea
          id="comment"
          rows="6"
          class="px-0 w-full text-sm border-0 outline-none focus:ring-0 focus:outline-none text-white placeholder-gray-400 bg-dark1"
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <button type="submit" class="btn-primary">Post comment</button>
    </form>
  </div>
</template>
