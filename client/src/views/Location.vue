<template>
  <div>
    <navBar />
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
      style="background-color: black"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active visually-hidden"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          class="visually-hidden"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          class="visually-hidden"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../Picture/slidechef.jpg"
            style="width: auto; height: 810px; opacity: 0.3; object-fit: cover"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../Picture/slideresto.jpg"
            class="d-block w-100 mx-auto"
            style="width: 100%; height: 810px; opacity: 0.3; object-fit: cover"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img
            src="../Picture/slideresto2.jpg"
            class="d-block w-100 mx-auto"
            style="width: 100%; height: 810px; opacity: 0.3; object-fit: cover"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container-fluid">
        <div class="row" style="">
      <div class="col-12 bg-dark">
        <div class="text-center py-4">
          <img src="../Picture/LOCATION.png" alt="" width="" height="90" />
        </div>
      </div>
    </div>
    <div class="row" style="background-color: white">
      <div class="container">
        <div class="row my-5 mx-5">
          <div class="col-4">
            <div class="card shadow" style="width: 25rem; margin-left: 10rem">
              <img class="card-img-top" src="../Picture/frontresto.jpg" alt="Card image cap" style="height: 270px" />
              <div class="card-body">
                <h5 class="card-title"><u>Pondok Indah</u></h5>
                <p class="card-text" style="color: black">
                  Jl. hahaha No.6 <br />
                  Jakarta 11111
                </p>
                <h4
                  style="
                    color: black;
                    padding-bottom: 1rem;
                    font-weight: bold;
                    font-size: 20px;
                  "
                >
                  <u>Operational Hours</u>
                </h4>
                <p style="color: black">09.00 - 22.00 <br /></p>
                <h4
                  style="
                    color: black;
                    padding-bottom: 1rem;
                    font-weight: bold;
                    font-size: 20px;
                  "
                >
                  <u>Contact</u>
                </h4>
                <p style="color: black">
                  +628123456 <br />
                  makan.pim@makanology.com
                </p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card shadow" style="width: 25rem; margin-left: 6rem">
              <img class="card-img-top" src="../Picture/restofront2.jpg" alt="Card image cap" style="height: 270px" />
              <div class="card-body">
                <h5 class="card-title"><u>Senayan</u></h5>
                <p class="card-text" style="color: black">
                  Jl. hahaha No.6 <br />
                  Jakarta 11111
                </p>
                <h4
                  style="
                    color: black;
                    padding-bottom: 1rem;
                    font-weight: bold;
                    font-size: 20px;
                  "
                >
                  <u>Operational Hours</u>
                </h4>
                <p style="color: black">09.00 - 22.00 <br /></p>
                <h4
                  style="
                    color: black;
                    padding-bottom: 1rem;
                    font-weight: bold;
                    font-size: 20px;
                  "
                >
                  <u>Contact</u>
                </h4>
                <p style="color: black">
                  +628123456 <br />
                  makan.senayan@makanology.com
                </p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card shadow" style="width: 25rem; margin-left: 1rem">
              <img class="card-img-top" src="../Picture/restofront3.jpg" alt="Card image cap" style="height: 270px" />
              <div class="card-body">
                <h5 class="card-title"><u>Menteng</u></h5>
                <p class="card-text" style="color: black">
                  Jl. hahaha No.6 <br />
                  Jakarta 11111
                </p>
                <h4
                  style="
                    color: black;
                    padding-bottom: 1rem;
                    font-weight: bold;
                    font-size: 20px;
                  "
                >
                  <u>Operational Hours</u>
                </h4>
                <p style="color: black">09.00 - 22.00 <br /></p>
                <h4
                  style="
                    color: black;
                    padding-bottom: 1rem;
                    font-weight: bold;
                    font-size: 20px;
                  "
                >
                  <u>Contact</u>
                </h4>
                <p style="color: black">
                  +628123456 <br />
                  makan.menteng@makanology.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer style="width: 100.65%" />
  </div>
</template>

<script>
import navBar from '../components/Navbar'
import Footer from '../components/Footer.vue'
export default {
  components: { Footer, navBar },
  name: 'Location'
}
</script>

<style>
</style>
