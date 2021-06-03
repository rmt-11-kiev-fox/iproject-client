<template>
  <main>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Bidan Kami</h1>
      <p class="fs-5 text-muted">Kami menyediakan bidan-bidan berkualitas yang kompeten untuk menjawab keluhan ibu semua.</p>
    </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Nurul Fitri S. Bid.,</h4>
          </div>
          <div class="card-body">
            <img src="https://thumbs.dreamstime.com/b/female-doctor-portrait-smiling-woman-her-arms-crossed-34896061.jpg" style="max-width: 250px;">
            <ul class="list-unstyled mt-3 mb-4">
              <li>Lokasi: Desa Cibeureum</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary" disabled>Tidak Tersedia</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Nunung Suherma S. Bid.,</h4>
          </div>
          <div class="card-body">
            <img src="https://thumbs.dreamstime.com/b/female-doctor-portrait-smiling-woman-her-arms-crossed-34896061.jpg" style="max-width: 250px;">
            <ul class="list-unstyled mt-3 mb-4">
              <li>Lokasi: Desa Sukamulya</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Mulai Konsultasi</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Siti Badriah S. Bid.,</h4>
          </div>
          <div class="card-body">
            <img src="https://thumbs.dreamstime.com/b/female-doctor-portrait-smiling-woman-her-arms-crossed-34896061.jpg" style="max-width: 250px;">
            <ul class="list-unstyled mt-3 mb-4">
              <li>Lokasi: Desa Cibeber</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary" data-bs-toggle="modal" data-bs-target="#form-chat">Mulai Konsultasi</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
