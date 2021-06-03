<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide carousel-dark slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://image.freepik.com/free-vector/volunteers-collecting-goods-for-charity-into-huge-donation-box-and-donating-coins-into-jar-donation-charity-donation-funds-gift-in-kind-concept-pinkish-coral-bluevector-isolated-illustration_335657-1387.jpg"
          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <div class="bg-white mx-auto p-2 rounded" style="width: 300px">
            <h5 class="title">GIVE SMARTER</h5>

            <a
              class="btn btn-secondary"
              target="_blank"
              href="https://www.charitywatch.org/charity-donating-tips"
            >
              Charity Donating tips</a
            >
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="https://img.freepik.com/free-vector/volunteering-outline-concept-illustration-help-charity-sharing-hope_1995-466.jpg?size=626&ext=jpg"

          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <div class="bg-white mx-auto p-2 rounded" style="width: 300px">
            <router-link to="/about">
              <a class="btn btn-secondary"> About us</a>
            </router-link>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="https://img.freepik.com/vetores-gratis/equipe-de-voluntarios-entregando-caixas-de-ajuda-a-refugios-e-van-de-ajuda-humanitaria-ajuda-humanitaria-assistencia-material-conceito-de-ajuda-governamental-ilustracao-de-vetor-isolado-de-coral-rosa_335657-1388.jpg?size=664&ext=jpg"

          class="d-block w-100"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <div class="bg-white mx-auto p-2 rounded" style="width: 300px">
            <h5 class="title">Guide to volunteering</h5>

            <a
              class="btn btn-secondary"
              target="_blank"
              href="https://www.charitynavigator.org/index.cfm?bay=content.view&cpid=201"
            >
              volunteering tips</a
            >
          </div>
        </div>
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
</template>

<script>
export default {
  name: "Slider",
};
</script>

<style>
</style>