<template>
  <div id="app" class="wrapper">
    <app-topbar></app-topbar>
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <app-home></app-home>
    <app-footer></app-footer>
  </div>
</template>

<script>
import {AppHeader, AppTopbar, AppSidebar, AppFooter} from "./components/themes/";
import AppHome from "./views/Home.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AppTopbar,
    AppSidebar,
    AppHome,
    AppFooter
  }
};
</script>

<style>

@font-face {
	font-family: 'Prompt';
	src: url(./assets/fonts/Prompt-Regular.ttf);
	font-style:normal;
	font-weight:400;
}

#app {
  font-family: 'Prompt', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
