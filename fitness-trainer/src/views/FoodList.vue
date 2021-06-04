<template>
  <div>
    <Navbar/>
    <ManualCreateFood/> <br>

    <div class="input-group mb-3">
      <input v-model="q" type="text" class="form-control" placeholder="Search Food" aria-label="Username" aria-describedby="basic-addon1">
      <button class="btn btn-dark" @click.prevent="searchFood">Click to search</button>
    </div>
    
    <div class="card mb-3" style="max-width: 1040px;">
      <div class="row g-0" v-for="(food, idx) in listFood" :key="idx">
        <div class="col-md-4">
          <img :src="food.recipe.image"  alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ food.recipe.label }}</h5>
            <p class="card-text">Calories: {{ withoutDecimal(food.recipe.calories) }} kcal</p>
            <p class="card-text">Protein: {{ withoutDecimal(food.recipe.totalNutrients.PROCNT.quantity) }} g</p>
            <p class="card-text">Carbohydrates: {{ withoutDecimal(food.recipe.totalNutrients.CHOCDF.quantity) }} g</p>
            <p class="card-text">Fat: {{ withoutDecimal(food.recipe.totalNutrients.FAT.quantity) }} g</p>
            <p class="card-text">Food weight: {{ withoutDecimal(food.recipe.totalWeight) }} g</p>
            <button @click.prevent="addToFoodList(food.recipe.calories, food.recipe.totalNutrients.PROCNT.quantity, food.recipe.totalNutrients.CHOCDF.quantity, food.recipe.totalNutrients.FAT.quantity, food.recipe.label)" class="btn btn-info">Add to food list</button>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ManualCreateFood from '../components/ManualCreateFood'

export default {
  name: 'FoodList',
  data () {
    return {
      q: null
    }
  },
  components: {
    Navbar, Footer, ManualCreateFood
  },
  computed: {
    listFood () {
      return this.$store.state.listFood
    },
  },
  methods: {
    searchFood () {
      this.$store.dispatch('fetchFoodList', this.q)
    },
    withoutDecimal (number) {
      return Math.round(number)
    },
    addToFoodList (paramCal, paramProt, paramCarbs, paramFat, name) {
      const payload = {
        foodName: name,
        calories: this.withoutDecimal(paramCal),
        protein: this.withoutDecimal(paramProt),
        carbohydrates: this.withoutDecimal(paramCarbs),
        fat: this.withoutDecimal(paramFat)
      }

      console.log('--------------------------------', payload ,'------------------------------------------');
      this.$store.dispatch('addToFoodToday', payload)
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>