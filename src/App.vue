<script  lang="js">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from "./components/Navbar.vue";


export default {
  data() { },
  watch: {
  },
  created() { },
  computed: {},
  methods: {},
  watch: {},
  components: { RouterView, Navbar }
}
</script>


<template>
    <Navbar></Navbar>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
