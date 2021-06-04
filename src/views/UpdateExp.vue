<template>
  <form @submit.prevent="updateExp(currentAmount.id)">
    <div class="form-floating">
      <label class="text-center" for="amount">Amount</label>
      <input type="number" class="form-control" v-model="currentAmount.amount"><br>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit"> Update </button><br><br>
  </form>
</template>

<script>
export default {
  name: 'UpdateExp',
  computed: {
    currentAmount () {
      return this.$store.state.getExp
    }
  },
  methods: {
    updateExp (id) {
      const payload = {
        id: id,
        amount: this.currentAmount.amount
      }
      this.$store.dispatch('updateExp', payload)
    }
  }
}
</script>

<style>

</style>
