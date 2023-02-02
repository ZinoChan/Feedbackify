<template>
  <form class="mt-10 max-w-lg mx-auto bg-dark2 rounded-md px-6 py-10">
    <h3 class="text-xl text-white font-bold capitalize mb-4">Add Feedback</h3>
    <div class="mb-6">
      <label
        for="Feedback Title"
        class="block mb-2 capitalize text-sm font-bold text-primary2"
      >
        Feedback Title
      </label>
      <input
        type="text"
        id="base-input"
        placeholder="Add a short, descriptive headline"
        class="border border-gray2 bg-transparent text-sm rounded text-white placeholder:text-gray-400 block w-full p-2.5 focus:outline-none focus:border-primary2"
      />
    </div>
    <div class="mb-6">
      <label
        for="Category"
        class="block mb-2 capitalize text-sm font-bold text-primary2"
      >
        Category
      </label>
      <select
        id="countries"
        class="border border-gray2 bg-transparent text-sm rounded text-white bg-dark2 placeholder:text-gray-400 block w-full p-2.5 focus:outline-none focus:border-primary2"
      >
        <option>enhancement</option>
        <option>ui</option>
        <option>ux</option>
        <option>bug</option>
        <option>feature</option>
      </select>
    </div>
    <div class="mb-8">
      <label
        for="feedback detail"
        class="block mb-2 capitalize text-sm font-bold text-primary2"
      >
        feedback detail
      </label>
      <textarea
        id="message"
        rows="5"
        placeholder="Include any specific comments on what should be improved, added, etc."
        class="block p-2.5 w-full rounded text-sm bg-transparent border border-gray2 text-white placeholder:text-gray-400 focus:outline-none focus:border-primary2"
      ></textarea>
    </div>
    <div class="flex justify-end space-x-2">
      <button
        type="button"
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray2 rounded text-sm px-5 py-2.5 mr-2 mb-2"
      >
        cancel
      </button>
      <button
        type="button"
        class="text-white bg-gradient-to-br from-primary1 to-primary2 focus:ring-4 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Add Feedback
      </button>
    </div>
  </form>
</template>

<style>
option {
  background: #1e1f25;
}
</style>
