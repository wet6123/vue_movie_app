<template>
  <div class="header">
    <header>
      <div>
        <router-link :to="{ name: 'home' }">logo</router-link>
      </div>
      <nav>
        <router-link :to="{ name: 'MovieCreate' }">영화등록</router-link>
        <router-link :to="{ name: 'MovieList' }">영화목록</router-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "header-nav",
};
</script>

<style>
header {
  background-color: cornflowerblue;
  display: flex;
  justify-content: space-between;
}
</style>
