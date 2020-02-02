<template>
  <div class="profile">
    <h2>This is a Profie for {{ userID }}</h2>
  </div>
</template>
<script>
export default {
  name: "profile",
  data() {
    return {
      userID: this.$route.params.id
    };
  },
  methods: {
    updateID() {
      this.userID = this.$route.params.id;
    }
  },
  watch: {
    $route: "updateID"
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
