<template>
  <div class="container border p-4 mx-auto mb-4">
    <div class="mb-4">
      <h2>My Profile</h2>
    </div>
    <form @submit.prevent="editProfileHandler">
      <div class="form-group row m-2">
        <div class="col-2">
          <label for="staticEmail" class="col-form-label">Full Name</label>
        </div>

        <div class="col-5">
          <input
            v-model="profile.firstName"
            type="text"
            class="form-control"
            placeholder="First name"
          />
        </div>
        <div class="col-5">
          <input
            v-model="profile.lastName"
            type="text"
            class="form-control"
            placeholder="Last name"
          />
        </div>
      </div>
      <div class="form-group row m-2">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Email Address</label
        >
        <div class="col-10">
          <input
            v-model="profile.email"
            type="text"
            class="form-control"
            placeholder="example@mail.com"
          />
        </div>
      </div>
      <div class="form-group row m-2">
        <label class="col-sm-2 col-form-label">Phone Number</label>
        <div class="col-sm-10">
          <input
            v-model="profile.phoneNumber"
            type="text"
            class="form-control"
            placeholder="0123456789"
          />
        </div>
      </div>
      <div class="form-group row m-2">
        <label class="col-sm-2 col-form-label">Address</label>
        <div class="col-sm-10">
          <input v-model="profile.address" type="text" class="form-control" />
        </div>
      </div>
      <div>
        <button type="submit" class="btn btn-secondary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      input: {
        firstName: "",
        lastName: "",
        address: "",
        phoneNumber: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    editProfileHandler() {
      this.input = this.profile;
      this.$store.dispatch("editProfile", this.input);
    },
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  created() {
    this.$store.dispatch("fetchProfile");
  },
};
</script> 

<style scoped>
</style>