<template>
  <div id="menu-page"
    style="background-image: url(../Picture/photo-1491960693564-421771d727d6.jpg); background-size: 2000px;">
    <navBar/>
    <!-- slideshow -->
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style="background-color: black;">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                class="active visually-hidden" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="visually-hidden"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="visually-hidden"
                aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" class="visually-hidden"
                aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../Picture/food1.jpg" class="d-block w-100 mx-auto"
                    style="width: auto; height: 810px; opacity: 0.3; object-fit: cover;" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../Picture/food2.jpg" class="d-block w-100 mx-auto"
                    style="width: 100%; height: 810px; opacity: 0.3; object-fit: cover;" alt="...">
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
            <div class="carousel-item">
                <img src="../Picture/food 3.jpg" class="d-block w-100 mx-auto"
                    style="width: 100%; height: 810px; opacity: 0.3; object-fit: cover;" alt="...">
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
            <div class="carousel-item">
                <img src="../Picture/food4.jpg" class="d-block w-100 mx-auto"
                    style="width: 100%; height: 810px; opacity: 0.3; object-fit: cover;" alt="...">
                <div class="carousel-caption d-none d-md-block">
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <!-- 2nd section -->
    <div class="container-fluid">
        <!-- 1st checkpoint -->
        <div class="row">
            <div class="col-12 bg-dark">
                <div class="text-center">
                    <img src="../Picture/menu.png" alt="" width="210" height="145">
                </div>
            </div>
        </div>
        <!-- The Menu -->
        <div class="row" :style="
          { background: 'url(' + require('@/Picture/menubackground.jpg') + ')' }
        ">
            <div class="container">
                <div class="row text-center">
                <img src="../Picture/MENU.jpg" style="width: 50%; margin-left:30rem; margin-top: 5rem; margin-bottom:5rem" alt="" data-aos="zoom-in">
            </div>
            </div>
            <Footer/>
        </div>
    </div>
</div>
</template>

<script>
import navBar from '../components/Navbar'
import Footer from '../components/Footer'

export default {
  name: 'Menu',
  components: {
    navBar,
    Footer
  },
  created () {
    window.scrollTo(0, 0)
  }
}
</script>
