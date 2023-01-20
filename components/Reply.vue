<template>
  <article
    class="border-b border-gray-100 p-6 mb-6 ml-6 text-base bg-white rounded-lg dark:bg-gray-900"
  >
    <footer class="flex justify-between items-center mb-2">
      <div class="flex items-center">
        <p
          class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"
        >
          <img
            class="mr-2 w-6 h-6 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
            alt="Michael Gough"
          />Michael Gough
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          <time pubdate datetime="2022-02-08" title="February 8th, 2022"
            >Feb. 8, 2022</time
          >
        </p>
      </div>
      <button
        id="dropdownComment1Button"
        data-dropdown-toggle="dropdownComment1"
        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
      >
        <Icon class="text-lg" name="humbleicons:dots-horizontal" />
        <span class="sr-only">Comment settings</span>
      </button>
      <!-- Dropdown menu -->
      <div
        id="dropdownComment1"
        class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          class="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconHorizontalButton"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Edit</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Remove</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Report</a
            >
          </li>
        </ul>
      </div>
    </footer>
    <p class="text-gray-500 text-sm dark:text-gray-400">
      much appreciated! Glad you liked it
    </p>
    <div class="flex items-center mt-4 space-x-4">
      <button
        type="button"
        class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
      >
        <Icon class="text-lg mr-1 text-gray-700" name="uil:comment-dots" />
        Reply
      </button>
    </div>
  </article>
</template>
