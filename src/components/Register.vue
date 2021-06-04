<template>
  <!-- REGISTER FORM -->
  <div id="register">
    <div class="container mb-5">
      <h2 class="text-center" style="color: saddlebrown"><b>Are You Interested?</b></h2>
      <h2 class="text-center" style="color: saddlebrown">Feel Free To Get In Touch To Find Out More</h2>
      <p class="text-center" style="color: saddlebrown">Complete The Form and We'll Be In Touch Soon</p>
      <div class="text-start">
        <form @submit.prevent="register" class="container-fluid">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email:</label>
            <input v-model="email" type="email" class="form-control">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password:</label>
            <input v-model="password" type="password" class="form-control" >
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name of Your Business:</label>
            <input v-model="name" type="name" class="form-control">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Address:</label>
            <textarea v-model="address" type="name" class="form-control" ></textarea>
          </div>
          <div class="mb-3">
            <select v-model="category" class="form-select" id="category">
              <option disabled>Select Category of Your Business</option>
              <option>Coffee Lover</option>
              <option>Cafe</option>
              <option>Restaurant</option>
              <option>Others</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="setup" class="form-label">Message:</label>
            <textarea v-model="message" class="form-control" name="" id="" cols="30" rows="5"></textarea>
          </div>
          <button type="submit" class="btn-lg btn-dark">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      address: '',
      category: '',
      message: ''
    }
  },
  methods: {
    register () {
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        address: this.address,
        category: this.category,
        message: this.message
      }
      this.$store.dispatch('register', payload)
      this.name = ''
      this.email = ''
      this.password = ''
      this.address = ''
      this.category = ''
      this.message = ''
    }
  }
}
</script>

<style>

</style>
