<template>
  <div id="app">
    <navigation />
    <img src="./assets/techno-drinks-logo.png">
    <router-view class="router-view"/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.router-view {
  border: 5px outset grey;
  padding: 1%;
}
</style>
