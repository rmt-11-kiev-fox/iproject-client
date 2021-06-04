<template>
  <form @submit.prevent="editExp(currentExp.id)">
    <div class="form-floating">
      <label class="text-center" for="category">Category</label><br>
      <select class="form-control" name="category" v-model="currentExp.category">
        <option disabled value="#">Select the category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Health">Health</option>
        <option value="Shopping">Shopping</option>
        <option value="Others">Others</option>
      </select><br>
      <label class="text-center" for="description">Description</label>
      <input type="text-area" class="form-control" v-model="currentExp.description"><br>
    </div><br>
    <button class="w-100 btn btn-lg btn-primary" type="submit"> Submit </button><br><br>
  </form>
</template>

<script>
export default {
  name: 'EditExp',
  computed: {
    currentExp () {
      return this.$store.state.getExp
    }
  },
  methods: {
    editExp (id) {
      const payload = {
        id,
        category: this.currentExp.category,
        description: this.currentExp.description
      }
      this.$store.dispatch('editExp', payload)
    }
  }
}
</script>

<style>

</style>
