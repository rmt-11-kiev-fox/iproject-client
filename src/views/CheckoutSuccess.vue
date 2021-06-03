<template>
  <h1>Thank You for Your Donation</h1>
</template>

<script>
import { stripe } from "../stripe/index";

export default {
  name: "CheckoutSuccess",
  methods: {
    checkoutSession() {
      const checkoutSession = this.$route.query.id;
      this.$store.dispatch("fetchLineItems", checkoutSession);

    },
  },

  created() {
    this.checkoutSession();
  },
};
</script>
 

<style>
</style>