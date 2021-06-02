<template>
  <div class="container">
    <!-- <form @submit.prevent="checkoutHandler">
      NAME
      <input type="text" :value="input.name" readonly />
      <br />
      Donation Amount
      <input v-model="input.amount" type="number" step="1" min="1" />
      <br />
      <button type="submit" class="btn btn-warning">Submit</button>
    </form> -->

    <form @submit.prevent="checkoutHandler">
      <fieldset>
        <h1 class="text-center mt-2 mb-4">Donate</h1>
        <hr />

        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label"
            >Organization Name</label
          >
          <div class="col-sm-6">
            <input type="text" :value="input.name" readonly />
          </div>
        </div>

        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label"
            >Donation Amount</label
          >
          <div class="col-sm-6">
            <input v-model="input.amount" type="number" step="1" min="10" />
          </div>
        </div>

        <div class="text-center mb-3">
          <button type="submit" class="btn btn-warning">Submit</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: "Checkout",
  data() {
    return {
      input: {
        amount: "",
        name: "",
      },
    };
  },
  methods: {
    checkoutHandler() {
      this.$store.dispatch("createProduct", this.input);
    },
  },
  created() {
    const charityName = this.$route.query.id;
    this.input.name = charityName;
  },
};
</script>

<style>
</style>