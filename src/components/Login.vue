<template>
  <div id='loginPage' class="container vh-100">
    <div class="row">
      <div class="d-flex justify-content-center mt-5">
        <div id='login' class="col-lg-4 mt-5 rounded-start shadow-lg bg-dark">
          <!-- IMAGE -->
        </div>
        <div class="col-lg-4 mt-5 bg-light rounded-end" >
          <h2 class="mt-3"><center>LOGIN</center></h2>
          <div class="container">
            <form @submit.prevent="login" class="mx-2">
              <div class="form-group mt-3">
                <label for="formGroupExampleInput">Email:</label>
                <input v-model="email" type="email" class="form-control mt-1" id="email" placeholder="Email">
              </div>
              <div class="form-group mt-3">
                <label for="formGroupExampleInput2">Password:</label>
                <input v-model="password" type="password" class="form-control mt-1" id="password" placeholder="Password">
              </div>
              <div class="text-center my-4">
                <button type="submit" class="btn-lg btn-dark mt-2 mb-2">LOGIN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'

}
</script>

<style>

</style>
