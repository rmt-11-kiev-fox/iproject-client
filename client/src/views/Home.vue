<template>
  <div
    id="home-page"
    :style="
          { backgroundImage: 'url(' + require('@/Picture/photo-1491960693564-421771d727d6.jpg') + ')' }
        "
    style="
      background-size: 2000px;
    "
  >
    <navBar />
    <!-- slideshow -->
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
    <!-- 2nd section -->
    <div class="container-fluid">
      <!-- 1st checkpoint -->
      <div class="row">
        <div class="col-12 bg-dark">
          <div class="text-center">
            <img src="../Picture/logo.png" alt="" width="210" height="145" />
          </div>
        </div>
      </div>
      <!-- about us -->
      <div class="row" style="background-color: white">
        <div class="col-12">
          <div class="text-center my-5 mx-5">
            <h1>ABOUT US</h1>
            <div class="mx-5 px-5">
              <div class="mx-5 px-5">
                <p class="my-5 mx-5 px-5" style="font-weight: 500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, in sunt ab natus officia libero repudiandae consequatur
                  perferendis iste. Exercitationem quibusdam placeat consectetur
                  unde in. Qui nulla quae alias nostrum.Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Quam, illum. Inventore
                  natus et ipsum totam commodi nulla aspernatur corrupti.
                  Sapiente iste expedita perspiciatis vero ullam harum illum
                  distinctio, dolores libero. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. A, facilis fugiat debitis sequi
                  ducimus quod voluptas dolore ipsum sed? Quisquam, quasi. Id,
                  dolore officiis sit quas laudantium maiores praesentium
                  officia! Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Saepe, hic, deleniti ratione aspernatur deserunt eaque
                  quidem sequi sit soluta, aliquam consequuntur fugit fugiat
                  repellat voluptates magni repellendus quisquam temporibus
                  distinctio!
                </p>
                <p class="my-5 mx-5 px-5" style="font-weight: 500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, in sunt ab natus officia libero repudiandae consequatur
                  perferendis iste. Exercitationem quibusdam placeat consectetur
                  unde in. Qui nulla quae alias nostrum.Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Quam, illum. Inventore
                  natus et ipsum totam commodi nulla aspernatur corrupti.
                  Sapiente iste expedita perspiciatis vero ullam harum illum
                  distinctio, dolores libero. Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. A, facilis fugiat debitis sequi
                  ducimus quod voluptas dolore ipsum sed? Quisquam, quasi. Id,
                  dolore officiis sit quas laudantium maiores praesentium
                  officia! Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Saepe, hic, deleniti ratione aspernatur deserunt eaque
                  quidem sequi sit soluta, aliquam consequuntur fugit fugiat
                  repellat voluptates magni repellendus quisquam temporibus
                  distinctio!
                </p>
                <div class="container">
                  <div class="row">
                    <div class="col-4">
                      <img
                        src="../Picture/undraw_ice_cream_s2rh.png"
                        style="width: 10rem"
                        alt=""
                      />
                    </div>
                    <div class="col-4">
                      <img
                        src="../Picture/undraw_eating_together_tjhx.png"
                        style="width: 10rem"
                        alt=""
                      />
                    </div>
                    <div class="col-4">
                      <img
                        src="../Picture/undraw_Hamburger_8ge6.png"
                        style="width: 10rem"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <hr class="mx-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Our Menu -->
      <div class="row">
        <div class="col-6">
          <div class="bg-dark my-3 rounded" style="opacity: 0.8">
            <h1
              style="
                color: white;
                margin-left: 5rem;
                padding-top: 4rem;
                padding-bottom: 2rem;
              "
            >
              OUR MENU
            </h1>
            <hr
              style="
                color: white;
                margin-left: 5rem;
                margin-right: 5rem;
                margin-bottom: 3rem;
                padding-bottom: 3px;
              "
            />
            <p
              style="
                color: white;
                margin-left: 5rem;
                margin-right: 5rem;
                text-align: justify;
              "
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              ipsa voluptatibus voluptate obcaecati ab perspiciatis quam quos,
              quia est vitae corrupti omnis rem labore ex rerum nemo accusamus
              odit modi. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Tempore saepe aspernatur, molestiae reiciendis voluptate
              officia quod impedit, nam aliquid odit sit eligendi aperiam? Esse
              praesentium voluptatibus odio, iure velit molestias. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Deserunt ratione
              corrupti libero laboriosam molestiae omnis porro. Aspernatur
              mollitia itaque numquam eum, cum adipisci quo corporis, sunt, quas
              nulla incidunt architecto?
            </p>
            <p
              style="
                color: white;
                margin-left: 5rem;
                margin-right: 5rem;
                padding-bottom: 5rem;
                text-align: justify;
              "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              neque sint rerum iste, quisquam id perferendis amet omnis fugiat!
              Ut nisi quae ipsam. Exercitationem cupiditate repellat ipsum
              officia ducimus animi! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore sunt quaerat ipsa quasi. Numquam hic
              possimus quas deserunt, aliquam autem debitis corrupti! Dicta
              corrupti vel placeat nihil quisquam sunt natus. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Unde aliquam accusantium
              totam eveniet! Laborum veritatis officia eaque assumenda dolores
              possimus, odit quidem, voluptates quos accusamus est nihil
              reiciendis sequi iusto! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugiat tempore nam consequatur deserunt enim
              consequuntur a ratione ut? Ipsum omnis asperiores perferendis
              excepturi nobis ut beatae molestias harum! Illo, aut.
            </p>
          </div>
        </div>
        <div class="col-6">
          <button
            @click="goToMenu"
            type="button"
            class="btn btn-primary"
            id="learn-more"
            style="
              margin-top: 20rem;
              margin-left: 22rem;
              background-color: transparent;
              border-color: white;
              font-size: 30px;
            "
          >
            LEARN MORE
          </button>
        </div>
      </div>
      <!-- Where To Find Us -->
      <div
        class="row"
        :style="
          { backgroundImage: 'url(' + require('@/Picture/ambience.jpg') + ')' }
        "
        style="background-size: 100%"
      >
        <div class="col-6">
          <button
          @click="goToLoc"
            type="button"
            class="btn btn-primary"
            id="learn-more"
            style="
              margin-top: 20rem;
              margin-left: 22rem;
              background-color: transparent;
              border-color: white;
              font-size: 30px;
            "
          >
            LEARN MORE
          </button>
        </div>
        <div class="col-6">
          <div class="bg-dark my-3 rounded" style="opacity: 0.8">
            <h1
              style="
                color: white;
                padding-top: 4rem;
                padding-bottom: 2rem;
                text-align: center;
              "
            >
              WHERE TO FIND US
            </h1>
            <h6
              style="
                color: white;
                padding-bottom: 1rem;
                padding-left: 5rem;
                padding-right: 5rem;
                text-align: center;
                font-size: 12px;
                font-weight: lighter;
                font-family: Georgia, 'Times New Roman', Times, serif;
              "
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              voluptate et optio quae. Neque voluptas, ab voluptates possimus
              officia aperiam nam sapiente commodi adipisci minus nostrum
              doloribus accusantium ipsam. Totam!
            </h6>
            <hr
              style="
                color: white;
                margin-left: 5rem;
                margin-right: 5rem;
                margin-bottom: 3rem;
                padding-bottom: 3px;
              "
            />

            <div
              class="row pb-5"
              style="font-family: Georgia, 'Times New Roman', Times, serif"
            >
              <div class="col-4" style="text-align: center">
                <h4
                  style="
                    color: white;
                    padding-bottom: 1rem;
                    font-weight: bold;
                    font-size: 20px;
                  "
                >
                  <u>Pondok Indah</u>
                </h4>
                <p style="color: white">
                  Jl. hahaha No.6 <br />
                  Jakarta 11111
                </p>
                <h4
                  style="
                    color: white;
                    padding-bottom: 1rem;
                    font-weight: bold;
                    font-size: 20px;
                  "
                >
                  <u>Operational Hours</u>
                </h4>
                <p style="color: white">09.00 - 22.00 <br /></p>
                <h4
                  style="
                    color: white;
                    padding-bottom: 1rem;
                    font-weight: bold;
                    font-size: 20px;
                  "
                >
                  <u>Contact</u>
                </h4>
                <p style="color: white">
                  +628123456 <br />
                  makan.pim@makanology.com
                </p>
              </div>
              <div class="col-4" style="text-align: center">
                <h4
                  style="
                    color: white;
                    padding-bottom: 1rem;
                    font-weight: bold;
                    font-size: 20px;
                  "
                >
                  <u>Senayan</u>
                </h4>
                <p style="color: white">
                  Jl. hahaha No.6 <br />
                  Jakarta 11111
                </p>
                <h4
                  style="
                    color: white;
                    padding-bottom: 1rem;
                    font-weight: bold;
                    font-size: 20px;
                  "
                >
                  <U>Operational Hours </U>
                </h4>
                <p style="color: white">09.00 - 22.00 <br /></p>
                <h4
                  style="
                    color: white;
                    padding-bottom: 1rem;
                    font-weight: bold;
                    font-size: 20px;
                  "
                >
                  <u>Contact</u>
                </h4>
                <p style="color: white">
                  +628123456 <br />
                  makan.senayan@makanology.com
                </p>
              </div>
              <div class="col-4" style="text-align: center">
                <h4
                  style="
                    color: white;
                    padding-bottom: 1rem;
                    font-weight: bold;
                    font-size: 20px;
                  "
                >
                  <u>Menteng</u>
                </h4>
                <p style="color: white">
                  Jl. hahaha No.6 <br />
                  Jakarta 11111
                </p>
                <h4
                  style="
                    color: white;
                    padding-bottom: 1rem;
                    font-weight: bold;
                    font-size: 20px;
                  "
                >
                  <u>Operational Hours </u>
                </h4>
                <p style="color: white">09.00 - 22.00 <br /></p>
                <h4
                  style="
                    color: white;
                    padding-bottom: 1rem;
                    font-weight: bold;
                    font-size: 20px;
                  "
                >
                  <u>Contact</u>
                </h4>
                <p style="color: white">
                  +628123456 <br />
                  makan.menteng@makanology.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- footer -->
      <Footer/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navBar from '../components/Navbar'
import Footer from '../components/Footer'
import router from '../router/index'

export default {
  name: 'Home',
  components: {
    navBar,
    Footer
  },
  methods: {
    goToMenu () {
      router.push('/menu')
    },
    goToLoc () {
      router.push('/location')
    },
    created () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
