<template>
  <div class="nav">
    <h2>
      <router-link :to="{name: 'home'}">home</router-link>
      <router-link :to="{name: 'about'}">about</router-link>
      <!-- <ul>
        <li v-for="(id, index) in users" :key="index">
          <router-link :to="{name: 'profile', params:{id: id}}">Profile {{id}}</router-link>
        </li>
      </ul>-->
      <router-link :to="{name: 'pages'}">pages</router-link>
    </h2>
    <!-- <button @click="redirect">Rediect</button>
    <button @click="goBack">Go Back</button>
    <button @click="goForward">Go Forward</button>-->
  </div>
</template>

<script>
export default {
  name: "nav",
  data() {
    return {
      users: ["a", "b", "c", "d", "e", "f", "g", "h"]
    };
  }
  // methods: {
  //   redirect() {
  //     this.$router.push({ name: "home" });
  //   },
  //   goBack() {
  //     this.$router.go(-1);
  //   }
  //}
};
</script>

<style>
.nav ul li {
  list-style: none;
}
a.router-link-exact-active {
  color: orange;
}
</style>