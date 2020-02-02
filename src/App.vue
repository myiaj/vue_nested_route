<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import home from "@/components/home";
import profile from "@/components/profile";
import about from "@/components/about";
import card from "@/components/pages/card";

export default {
  name: "App",
  components: {
    navbar,
    home,
    about,
    profile,
    card
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
