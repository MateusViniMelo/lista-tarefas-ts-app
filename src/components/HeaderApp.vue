<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 border-b-2 dark:border-gray-500">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="https://flowbite.com/" class="flex items-center">
        <i class="bi bi-list-check mr-3 text-2xl dark:text-white"></i>

        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white ">Tarefas</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <router-link to="/"
              class="block text-base font-semibold hover:underline py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-gray-300 dark:hover:text-indigo-500"
              aria-current="page">Início</router-link>
          </li>
          <li>
            <router-link to="/about"
              class="block text-base font-semibold hover:underline py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-gray-300 dark:hover:text-indigo-500">Sobre</router-link>
          </li>
          <li class="md:border-l-2 md:pl-3 md:border-gray-200 md:dark:border-gray-700">
            <button id="theme-toggle" type="button" @click="toggleDark()"
              class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2">
              <i class="bi bi-moon-fill" v-if="!isDark"></i>
              <i class="bi bi-brightness-high-fill" v-if="isDark"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<style></style>