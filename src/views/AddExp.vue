<template>
  <form @submit.prevent="addNewExp">
    <div class="form-floating">
      <label class="text-center" for="category">Category</label><br>
      <select class="form-control" name="category" v-model="category">
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Bills">Bills</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Health">Health</option>
        <option value="Shopping">Shopping</option>
        <option value="Others">Others</option>
      </select><br>
      <label class="text-center" for="description">Description</label>
      <input type="text-area" class="form-control" placeholder="Description" v-model="description"><br>
      <label class="text-center" for="amount">Amount</label>
      <input type="number" class="form-control" placeholder="1" v-model="amount"><br>
      <label class="text-center" for="period">Period</label><br>
      <select class="form-control" name="period" v-model="period">
        <option value="JAN">January</option>
        <option value="FEB">February</option>
        <option value="MAR">March</option>
        <option value="APR">April</option>
        <option value="MAY">May</option>
        <option value="JUN">June</option>
        <option value="JUL">July</option>
        <option value="AUG">August</option>
        <option value="SEP">September</option>
        <option value="OCT">October</option>
        <option value="NOV">November</option>
        <option value="DEC">December</option>
      </select>
    </div><br>
    <button class="w-100 btn btn-lg btn-primary" type="submit"> Submit </button><br><br>
  </form>
</template>

<script>
export default {
  name: 'AddExp',
  data () {
    return {
      category: '',
      description: '',
      amount: 1,
      period: ''
    }
  },
  methods: {
    addNewExp () {
      const payload = {
        category: this.category,
        description: this.description,
        amount: this.amount,
        period: this.period
      }
      this.$store.dispatch('addNewExp', payload)
    }
  }
}
</script>

<style>

</style>
