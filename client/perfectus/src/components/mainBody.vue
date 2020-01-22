<template>
  <div>
  <topBody></topBody>
  <middleBody/>
  </div>
</template>

<script>
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";

new Vue({
  name: "mainBody",
  //is not made of any more components
});

export default {
  name: "mainBody",
  props: {
    companyName: String
  },
  Components: {
    middleBody,
    topBody,
    staticFooter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mainBody {
  background-color: #036278;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.829);
}
</style>
