<template>
  <form @submit.prevent="editInc(currentInc.id)">
    <div class="form-floating">
      <label class="text-center" for="category">Category</label><br>
      <select class="form-control" name="category" v-model="currentInc.category">
        <option disabled value="#">Select the category</option>
        <option value="Deposit">Deposit</option>
        <option value="Salary">Salary</option>
        <option value="Savings">Savings</option>
        <option value="Others">Others</option>
      </select><br>
      <label class="text-center" for="description">Description</label>
      <input type="text-area" class="form-control" v-model="currentInc.description"><br>
    </div><br>
    <button class="w-100 btn btn-lg btn-primary" type="submit"> Submit </button><br><br>
  </form>
</template>

<script>
export default {
  name: 'EditInc',
  methods: {
    editInc (id) {
      const payload = {
        id: id,
        category: this.currentInc.category,
        description: this.currentInc.description
      }
      this.$store.dispatch('editInc', payload)
    }
  },
  computed: {
    currentInc () {
      return this.$store.state.getInc
    }
  }
}
</script>

<style>

</style>
