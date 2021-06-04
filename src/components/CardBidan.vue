<template>
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
        <h4 class="my-0 fw-normal">{{bidan.name}}</h4>
        </div>
        <div class="card-body">
        <img :src="bidan.imageProfile" style="width: 250px">
        <ul class="list-unstyled mt-3 mb-4">
            <li>Lokasi: {{bidan.location}}</li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-outline-primary" disabled>Tidak Tersedia</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bidan']
}
</script>

<style>

</style>
