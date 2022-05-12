<template>
  <div class="home">
    <div id="test">this is home</div>
    <movie-search></movie-search>
  </div>
</template>

<script>
import MovieSearch from "../components/movie/MovieSearch.vue";

export default {
  name: "Home",
  components: {
    MovieSearch,
  },
};
</script>

<style>
#test {
  background-color: red;
}
</style>
