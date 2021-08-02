<template>
  <div class="about-content">
    <h1>This is vue home page</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    console.log("vue2.0写法 created");
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    close() {
      console.log("close");
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
