<template>
  <form @submit.prevent="updateInc(currentAmount.id)">
    <div class="form-floating">
      <label class="text-center" for="amount">Amount</label>
      <input type="number" class="form-control" v-model="currentAmount.amount"><br>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit"> Update </button><br><br>
  </form>
</template>

<script>
export default {
  name: 'UpdateInc',
  computed: {
    currentAmount () {
      return this.$store.state.getInc
    }
  },
  methods: {
    updateInc (id) {
      const payload = {
        id: id,
        amount: this.currentAmount.amount
      }
      this.$store.dispatch('updateInc', payload)
    }
  }
}
</script>

<style>

</style>
