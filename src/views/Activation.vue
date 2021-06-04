<template>
  <div class="container w-75 my-5 bg-light rounded shadow" id="login-page">
        <div class="row py-2 d-flex align-items-center">
            <div class="col">
                <!-- <img src="../../assets/login-logo.svg" style="width: 100%" alt="" /> -->
            </div>
            <div class="col">
                <h4>Mohon lengkapi form berikut</h4>
                <form @submit.prevent="activation">
                    <div class="mb-3">
                        <label for="text" class="form-label">Nama</label>
                        <input type="text" class="form-control" id="nama" aria-describedby="usernameHelp" v-model="name"/>
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Alamat</label>
                        <input type="text" class="form-control" id="address" v-model="address" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      name: '',
      address: ''
    }
  },
  methods: {
    activation () {
      this.$store.dispatch('activation', { name: this.name, address: this.address, id: this.$route.params.id })
    }
  }
}
</script>

<style>

</style>
