<template>
<div >
  <Header/>
  <router-view />
  <Downbar/>
</div>
</template>

<script>
import { mapGetters } from "vuex"
import Downbar from "../src/views/DownBar.vue"
import Header from "../src/views/Header.vue"

export default {
  components: {
    Downbar,
    Header
  },
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapGetters({
      brand: 'getBrand'
    })
  }
}
</script>

<style>
@import './assets/scss/index.css';
@import './assets/fonts/stylesheet.css';
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
