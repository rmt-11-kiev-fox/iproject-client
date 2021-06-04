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
        <button type="button" class="w-100 btn btn-lg btn-outline-primary" @click="showChat">Join Room Chat</button>
        </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  props: ['bidan'],
  methods: {
      showChat () {
          if(localStorage.username){
            $('#form-chat').modal('show')
          }else{
            swal("","silahkan login terlebih dahulu", "warning");
          }
      }
  }
}
</script>

<style>

</style>
