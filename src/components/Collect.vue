<template>
  <div id="register">
    <div class="container">
      <h2 class="text-center">COLLECT FORM</h2>
      <div class="col-6">
        <form class="container">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name of Your Business:</label>
            <input type="name" class="form-control">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Address:</label>
            <textarea type="name" class="form-control" ></textarea>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Collect Date:</label>
            <input type="date" class="form-control" >
          </div>
          <div class="mb-3">
            <label for="setup" class="form-label">Notes:</label>
            <textarea class="form-control" name="" id="" cols="30" rows="5"></textarea>
          </div>
          <button type="submit" class="btn-lg btn-success">COLLECT FOR ME</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collect'

}
</script>

<style>

</style>
