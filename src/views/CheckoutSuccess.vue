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
      // try {
      //   const session = await stripe.checkout.sessions.retrieve(req.query.id, {
      //     expand: ["line_items"],
      //   });
      //   console.log("masuk sini");
      //   console.log(session);
      // } catch (err) {
      //   console.log(err);
      // }
    },
  },

  created() {
    this.checkoutSession();
  },
};
</script>
 

<style>
</style>