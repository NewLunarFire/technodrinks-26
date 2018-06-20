<template>
    <div class="nav">
        <router-link class="nav-item" to="/">{{$t('nav.home')}}</router-link>
        <router-link class="nav-item" to="/list">{{$t('nav.list')}}</router-link>
        <router-link class="nav-item" to="/settings">{{$t('nav.settings')}}</router-link>
    </div> 
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style>
.nav {
  height: 50px;
  background-color: darkgrey;
  margin: 0;
  padding: 0;
}

.nav-item {
  display: inline-block;
  border: 2px outset black;
  height: 32px;
  width: 100px;
  vertical-align: middle;
  padding-top: 15px;
  color: black;
  text-decoration: none
}

.nav-item:active {
  border: 2px inset black;
}

.nav-item:visited {
  color: black;
  text-decoration: none;
}
</style>

