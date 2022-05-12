<template>
  <div id="app">
    <div>
      <header-nav></header-nav>
    </div>
    <router-view />
  </div>
</template>

<script>
import HeaderNav from "./components/common/HeaderNav.vue";

export default {
  name: "App",
  components: {
    HeaderNav,
  },
};
</script>

<style>
* {
  padding: 0px;
}
</style>
