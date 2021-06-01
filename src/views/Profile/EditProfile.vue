<template>
  <div class="container">
    <form @submit.prevent="editFormHandler">
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="staticEmail"
            value="email@example.com"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
      </div>
      <div><a href="" type="submit" class="btn">Submit</a></div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditProfile",
  methods: {
    editFormHandler() {
      this.$router.push({ name: ProfileData });
    },
  },
};
</script>

<style>
</style>