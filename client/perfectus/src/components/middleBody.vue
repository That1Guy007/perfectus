<template>
      <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. -->

  <div id="middleBody" class="container marketing">

    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-lg-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="bd-placeholder-img rounded-circle" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" width="140" height="140"><title>Placeholder</title><rect fill="#777" width="100%" height="100%" /><text fill="#777" x="50%" y="50%" dy="0.3em">140x140</text></svg>
        <h2>About Us</h2>
        <p>Come see our story, our brand, our promise.</p>
        <p><a class="btn btn-secondary" role="button" href="#">View details »</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="bd-placeholder-img rounded-circle" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" width="140" height="140"><title>Placeholder</title><rect fill="#777" width="100%" height="100%" /><text fill="#777" x="50%" y="50%" dy="0.3em">140x140</text></svg>
        <h2>Testimonials</h2>
        <p>Under stand how we have helped others and how we can help you.</p>
        <p><a class="btn btn-secondary" role="button" href="#">View details »</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="bd-placeholder-img rounded-circle" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" width="140" height="140"><title>Placeholder</title><text fill="#777" x="50%" y="50%" dy="0.3em">140x140</text></svg>
        <h2>Get Started</h2>
        <p>Let us help you take your next steps towards reaching your goals.</p>
        <p><a class="btn btn-secondary" role="button" href="#">View details »</a></p>
      </div><!-- /.col-lg-4 -->
    </div><!-- /.row -->


    <!-- START THE FEATURETTES -->

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">Enhance your current operations.<span class="text-muted"> Expand your resources sooner than you thought possible.</span></h2>
        <p class="lead">We beleive in providing not just the advice of a consultant but also helping pave the way towards success with you hand in hand. </p>
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
        <svg xmlns="http://www.w3.org/2000/svg" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" width="500" height="500"><title>Placeholder</title><text fill="#aaa" x="50%" y="50%" dy="0.3em">500x500</text></svg>
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
  position: relative;
}
#middleBody h2 {
  color: #CA8201;
}
.col-lg-4 {
  padding-top: 0%;
  position:relative;
}
</style>