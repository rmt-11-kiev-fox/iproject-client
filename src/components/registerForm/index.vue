<template>
  <div class="register-container">
    <div class="title">Register</div>
    <i
      class="fas fa-times icon-close"
      @click="toggleRegisterHandler(false)"
    ></i>
    <form @submit.prevent="registerHandler">
      <label>Email</label>
      <input
        type="email"
        placeholder="Masukan Email"
        v-model="emailInput"
        :class="errorHandler.email && 'error-box'"
      />
      <div class="error" v-if="errorHandler.email">Email Required</div>
      <label>Username</label>
      <input
        type="text"
        placeholder="Masukan Username"
        v-model="usernameInput"
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="Masukan Password"
        v-model="passwordInput"
        :class="errorHandler.password && 'error-box'"
      />
      <div class="error" v-if="errorHandler.password">Password Required</div>

      <label>Location</label>
      <select v-model="locationInput">
        <option
          v-for="item in getCityHandler"
          :key="item.id"
          :value="item.city_id"
        >
          {{ item.type + ' ' + item.city_name }}</option
        >
      </select>
      <div class="error" v-if="errorHandler.password">Location Required</div>

      <label>Add Image</label>
      <div class="flex">
        <img :src="imageInput" v-if="imageInput !== ''" />
        <button
          @click="openUploadModal"
          type="button"
          class="button-upload"
          v-if="imageInput === ''"
        >
          +
        </button>
        <button
          @click="openUploadModal"
          type="button"
          class="button-upload"
          v-if="imageInput !== ''"
        >
          <i class="fas fa-exchange-alt icon"></i>
        </button>
      </div>

      <label>Role</label>
      <div class="select-role">
        <div
          class="role"
          :class="role === 'buyer' && 'selected'"
          @click="changeRoleHandler('buyer')"
        >
          Pembeli
        </div>
        <div
          class="role"
          :class="role === 'seller' && 'selected'"
          @click="changeRoleHandler('seller')"
        >
          Penjual
        </div>
      </div>
      <div class="error" v-if="errorHandler.role">Role Required</div>

      <button class="button-submit">Submit</button>
    </form>
    <div class="login-copy">Have Any Account?</div>
    <div class="login-copy link" @click="toggleLoginHandler">Login</div>
  </div>
</template>

<script>
export default {
  props: ['toggleLoginHandler', 'toggleRegisterHandler'],
  name: 'Register',
  methods: {
    changeRoleHandler(val) {
      this.role = val
    },
    registerHandler() {
      const {
        role,
        imageInput,
        emailInput,
        passwordInput,
        usernameInput,
        locationInput
      } = this

      const obj = {
        role,
        image: imageInput,
        email: emailInput,
        password: passwordInput,
        username: usernameInput,
        location: Number(locationInput)
      }

      this.$store.dispatch('registerHandler', obj)
    },
    openUploadModal() {
      window.cloudinary
        .openUploadWidget(
          {
            cloud_name: 'dfh39qfib',
            upload_preset: 'rwfxz7rj'
          },
          (error, result) => {
            if (!error && result && result.event === 'success') {
              this.imageInput = result.info.url
            }
          }
        )
        .open()
    }
  },
  data() {
    return {
      role: 'buyer',
      imageInput: '',
      emailInput: '',
      passwordInput: '',
      usernameInput: ''
    }
  },
  computed: {
    errorHandler() {
      return this.$store.state.registerErrorHandler
    },
    getCityHandler() {
      return this.$store.state.city
    }
  },
  created() {
    this.$store.dispatch('getCityHandler')
  },
  destroyed() {
    this.$store.commit('CITY_DATA', [])
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
