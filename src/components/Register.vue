<template>
  <!-- REGISTER FORM -->
  <div id="register">
    <div class="container">
      <h2 class="text-center">Are You Interested?</h2>
      <h2 class="text-center">Feel Free To Get In Touch To Find Out More</h2>
      <p class="text-center">Complete The Form and We'll Be In Touch Soon</p>
      <div class="text-start">
        <form class="container-fluid">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email:</label>
            <input type="email" class="form-control">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password:</label>
            <input type="password" class="form-control" >
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name of Your Business:</label>
            <input type="name" class="form-control">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Address:</label>
            <textarea type="name" class="form-control" ></textarea>
          </div>
          <div class="mb-3">
            <select class="form-select" id="category">
              <option disabled>Select Category of Your Business</option>
              <option>Coffee Lover</option>
              <option>Cafe</option>
              <option>Restaurant</option>
              <option>Others</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="setup" class="form-label">Message:</label>
            <textarea class="form-control" name="" id="" cols="30" rows="5"></textarea>
          </div>
          <button type="submit" class="btn-lg btn-success">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
