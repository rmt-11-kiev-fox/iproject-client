<template>
<div class="container-fluid" :style="
          { backgroundImage: 'url(' + require('@/Picture/menubackground.jpg') + ')' }
        ">
      <div class="row" >
        <div class="col-12" style="margin-top: 11rem; margin-bottom: 5rem">
          <div class="card mx-auto px-3 py-5" style="width: 40rem; margin-top: 7rem; margin-bottom:11.45rem; padding-top: 2rem;">
            <div class="card-body">
              <h5 class="card-title text-center">MAKANOLOGY ADMIN LOGIN</h5>
              <form>
                <div class="form-group my-3">
                  <label for="exampleFormControlInput1">Username</label>
                  <input
                    class="form-control my-3"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div class="form-group my-3">
                  <label for="exampleFormControlInput1">Password</label>
                  <input
                    type="password"
                    class="form-control my-3"
                    id="exampleFormControlInput1"
                  />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script>
export default {
  name: 'AdminLogin'
}
</script>

<style>

</style>
