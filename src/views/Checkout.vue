<template>
  <div class="container" style="height: 74vh">
    <div class="container w-75 text-align-center border p-4">
      <form @submit.prevent="checkoutHandler">
        <fieldset>
          <h1 class="text-center mt-2 mb-4">{{ input.name }}</h1>
          <hr />
          <div class="form-group row">
            <div class="col-6">
              <label for="staticEmail" class="col-form-label"
                >Donation Amount</label
              >
            </div>
            <div class="col-6 d-flex">
              <div class="me-2">
                <input v-model="input.amount" type="number" step="1" min="10" />
              </div>
              <div class="form-check">
                <input
                  v-model="input.subscription"
                  class="form-check-input position-static"
                  type="checkbox"
                  :true-value="true"
                  :false-value="false"
                />
                Subscription
              </div>
            </div>
          </div>

          <div v-if="input.subscription" class="form-group row">
            <div class="col-6">
              <label for="staticEmail" class="col-form-label">Frequency</label>
            </div>
            <div class="col-6">
              <select
                v-model="input.interval"
                class="form-control"
                id="exampleFormControlSelect1"
              >
                <option value="month">Monthly</option>
                <option value="year">Annual</option>
              </select>
            </div>
          </div>

          <div class="text-center mb-3 mt-4">
            <button type="submit" class="btn btn-warning">Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
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
        interval: "",
        subscription: false,
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