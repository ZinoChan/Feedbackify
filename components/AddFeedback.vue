<template>
  <form class="max-w-lg mx-auto bg-white rounded-md px-6 py-10">
    <h3 class="text-xl font-bold capitalize mb-4">Create New Feedback</h3>
    <div class="mb-6">
      <label
        for="Feedback Title"
        class="block mb-2 capitalize text-sm font-bold text-teal-500"
      >
        Feedback Title
      </label>
      <input
        type="text"
        id="base-input"
        placeholder="Add a short, descriptive headline"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 focus:outline-none focus:border-teal-400"
      />
    </div>
    <div class="mb-6">
      <label
        for="Category"
        class="block mb-2 capitalize text-sm font-bold text-teal-500"
      >
        Category
      </label>
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 focus:outline-none focus:border-teal-400"
      >
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </select>
    </div>
    <div class="mb-8">
      <label
        for="feedback detail"
        class="block mb-2 capitalize text-sm font-bold text-teal-500"
      >
        feedback detail
      </label>
      <textarea
        id="message"
        rows="5"
        placeholder="Include any specific comments on what should be improved, added, etc."
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:outline-none focus:border-teal-400"
      ></textarea>
    </div>
    <div class="flex justify-end space-x-2">
      <button
        type="button"
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        cancel
      </button>
      <button
        type="button"
        class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Add Feedback
      </button>
    </div>
  </form>
</template>
