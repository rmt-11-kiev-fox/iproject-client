<template>
<!-- SEARCH CONTAINER -->
  <div class="container-sm bg-warning mt-5 mb-3 p-5 form-group shadow-lg">
    <form>
      <div class="row mb-3 p-3">
        <label for="age-group" class="col-sm-2 col-form-label" style="font-family: 'Righteous', cursive;">Age Group</label>
        <div class="col-sm-8">
          <select v-model="age_group" :value=age_group id="age-group" class="form-select" aria-label="Default select example" style="color: black; font-family: Varela Round;">
            <option disabled selected>Select age group</option>
            <option value="Baby">Baby</option>
            <option value="Kid">Kid</option>
            <option value="Young Adult">Young Adult</option>
            <option value="Adult">Adult</option>
          </select>
        </div>
      </div>
      <div class="row mb-3 p-3">
        <label for="gender" class="col-sm-2 col-form-label" style="font-family: 'Righteous', cursive;">Gender</label>
        <div class="col-sm-8">
          <select id="gender" v-model="gender" :value=gender class="form-select" aria-label="Default select example" style="color: black; font-family: Varela Round;" required>
            <option disabled selected>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div class="row mb-3 p-3">
        <label for="interest" class="col-sm-2 col-form-label" style="font-family: 'Righteous', cursive;">Interest</label>
        <div class="col-sm-8">
          <select id="interest" v-model="interest" :value=interest class="form-select" aria-label="Default select example" style="color: black; font-family: Varela Round;" required>
            <option disabled selected>Select interest</option>
            <option value="Art">Art</option>
            <option value="Automotive">Automotive</option>
            <option value="Coffee">Coffee</option>
            <option value="Cooking">Cooking</option>
            <option value="Electronic">Electronic</option>
            <option value="Entreprenuer">Entreprenuer</option>
            <option value="Health">Health</option>
            <option value="Home">Home</option>
            <option value="Office">Office</option>
            <option value="Sport">Sport</option>
          </select>
        </div>
      </div>
      <!-- @submit.prevent="resultHandler" -->
      <a class="nav-link active fs-4" aria-current="page" href="#result">
        <button @click.prevent="resultHandler" href="#result" type="submit" class="btn btn-dark" style="font-family: 'Righteous', cursive;">Show me some good products!</button>
      </a>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data () {
    return {
      age_group: '',
      gender: '',
      interest: ''
    }
  },
  methods: {
    resultHandler () {
      const payload = {
        age_group: this.age_group,
        gender: this.gender,
        interest: this.interest
      }
      this.$store.dispatch('fetchResult', payload)
      this.age_group = ''
      this.gender = ''
      this.interest = ''
    }
  }
}
</script>

<style>

</style>
