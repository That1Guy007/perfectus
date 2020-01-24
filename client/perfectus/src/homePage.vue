<template>
  <div id="app" class="wrapper strokeme">
    <!-- This will be the logo or put it into the brand Nav bar <img alt="Vue logo" src="./assets/logo.png"> -->
    <navBar companyName="Profectus Ventures"/>
    <topBody></topBody>
    <middleBody/>
    <staticFooter/>
  </div>
</template>

<script>
import navBar from './components/staticNavHeader.vue'
import middleBody from "./components/middleBody.vue"
import topBody from "./components/topBody.vue"
import staticFooter from "./components/staticFooter.vue"

export default {
  name: 'app',
  components: { //is made of the navBar and body components
    navBar,
    topBody,
    middleBody,
    staticFooter
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}
</style>
