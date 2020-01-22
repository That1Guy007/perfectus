 <template>
  <!-- FOOTER -->
  <footer class="container">
    <p class="float-right"><a href="#">Back to top</a></p>
    <p>© 2017-2019 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
  </footer>
</template>

<script>
//import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";

// new Vue({
//   name: "footer",
//   //is not made of any more components
// });

export default {
  name: "footer",
  props: {
    companyName: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  background-color: #036278;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.829);
}
</style>