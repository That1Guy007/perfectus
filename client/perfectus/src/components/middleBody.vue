<template>
      <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. -->

  <div class="container marketing">

    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-lg-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="bd-placeholder-img rounded-circle" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" width="140" height="140"><title>Placeholder</title><rect fill="#777" width="100%" height="100%" /><text fill="#777" x="50%" y="50%" dy="0.3em">140x140</text></svg>
        <h2>Heading</h2>
        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
        <p><a class="btn btn-secondary" role="button" href="#">View details »</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="bd-placeholder-img rounded-circle" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" width="140" height="140"><title>Placeholder</title><rect fill="#777" width="100%" height="100%" /><text fill="#777" x="50%" y="50%" dy="0.3em">140x140</text></svg>
        <h2>Heading</h2>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
        <p><a class="btn btn-secondary" role="button" href="#">View details »</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="bd-placeholder-img rounded-circle" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" width="140" height="140"><title>Placeholder</title><rect fill="#777" width="100%" height="100%" /><text fill="#777" x="50%" y="50%" dy="0.3em">140x140</text></svg>
        <h2>Heading</h2>
        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><a class="btn btn-secondary" role="button" href="#">View details »</a></p>
      </div><!-- /.col-lg-4 -->
    </div><!-- /.row -->


    <!-- START THE FEATURETTES -->

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" width="500" height="500"><title>Placeholder</title><rect fill="#eee" width="100%" height="100%" /><text fill="#aaa" x="50%" y="50%" dy="0.3em">500x500</text></svg>
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5 order-md-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" width="500" height="500"><title>Placeholder</title><rect fill="#eee" width="100%" height="100%" /><text fill="#aaa" x="50%" y="50%" dy="0.3em">500x500</text></svg>
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5">
        <svg xmlns="http://www.w3.org/2000/svg" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" width="500" height="500"><title>Placeholder</title><rect fill="#eee" width="100%" height="100%" /><text fill="#aaa" x="50%" y="50%" dy="0.3em">500x500</text></svg>
      </div>
    </div>

    <hr class="featurette-divider">

    <!-- /END THE FEATURETTES -->

  </div><!-- /.container -->
</template>

<script>
//import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";

// new Vue({
//   name: "mainBody",
//   //is not made of any more components
// });

export default {
  name: "middleBody",
  props: {
    companyName: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#middleBody {
  background-color: #036278;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.navbar-light .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.829);
}
</style>