<script setup>
import { ref } from "vue";
import SearchBar from "./components/SearchBar.vue";

const movies = ref([]);

function searchFilm(result) {
  movies.value = result;
}
</script>

<template>
  <div class="text-center text-6xl">
    <h1
      class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      Movies
    </h1>
    <p
      class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
    >
      Find your favorite movies and TV shows.
    </p>
    <SearchBar @searchMovie="searchFilm" />
  </div>
</template>
