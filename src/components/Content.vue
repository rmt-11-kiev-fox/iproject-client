<template>
  <div>
    <div id="jumbotron" class="jumbotron" style="background-color: burlywood">
        <div class="container-fluid">
            <h1 class="display-4 col-5 text-start text-light" style="padding: 50px 30px 0px">Turn Your Used Coffee Into Something Usable</h1>
            <p class="col-4 text-start text-warning" style="padding: 0px 30px 0px">Changing This Planet To A Waste-Free World!</p>
            <div class="col-4 text-start">
                <button type="button" class="btn btn-secondary text-light" data-bs-toggle="button" autocomplete="off" style="margin: 0px 30px 50px">Explore Our Shop >></button>
            </div>
        </div>
    </div>
    <!-- CARD -->
    <div class="container-fluid" style="padding: 50px 30px">
      <div class="navbar">
          <h3 class="col-3 text-start" style="color: saddlebrown">How Does It Works?</h3>
          <a style="color: saddlebrown" href="https://warkop-cycle.web.app/" class="nav-link col-3 text-end">Explore Our Recycle Products</a>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4" style="margin-top: 5px;">
          <div class="col">
            <div class="card h-100 rounded-3" style="background-color: bisque">
              <img src="../assets/step 1.jpg" class="card-img-top" style="background-size: 5000px">
              <div class="card-body">
                <h3 class="card-title">STEP 1</h3>
                <h5 class="card-title">Place Your Used Coffee Grounds Into Designated Bins</h5>
                <p class="card-text">The process is simple. We provide designated cofeee recycling bins to you for all your used coffee grounds to go in.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 rounded-3" style="background-color: bisque">
              <img src="../assets/step 2 (1).jpg" class="card-img-top mb-4" style="background-size: 1000px">
              <div class="card-body">
                <h3 class="card-title">STEP 2</h3>
                <h5 class="card-title">WarkopCycle. Collects Your Used Coffee Grounds</h5>
                <p class="card-text">WarckopCycle. collects tour coffee grounds on a regular, scheduled basis and then takes it off to be recycled at our partners.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100  rounded-3" style="background-color: bisque">
              <img src="../assets/step 3.jpg" class="card-img-top" style="background-size: 5000px">
              <div class="card-body">
                <h3 class="card-title">STEP 3</h3>
                <h5 class="card-title">Your Coffee Grounds Are Turned Into Something Truly Usable</h5>
                <p class="card-text">Our partners transform your used coffee grounds into several items which are helping you to help the environment and saving money along the way.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style>
  #jumbotron {
    background: url('../assets/coffee.jpg') center no-repeat;
    background-size: 1500px;
  }

</style>
