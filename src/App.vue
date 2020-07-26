<template>
  <div id="app">
    <header-vue></header-vue>
    <navigator></navigator>
    <router-view></router-view>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
  import HeaderVue from "./components/HeaderVue"
  import Navigator from "./components/Navigator";
  import FooterVue from "./components/FooterVue";


  export default {
    name: 'App',
    components: {
      HeaderVue,
      Navigator,
      FooterVue,

    }
  }
</script>

<style>
  /*global style*/
  @import "assets/css/base.css";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin: 0;
  }
</style>
