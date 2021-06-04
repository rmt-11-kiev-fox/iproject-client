<template>
  <div>
    <h2 v-if="todayData.length == 0">Looks like you don't have any activity today <br> <br> <br>
    <input v-model="currentWeight" placeholder="Your Weight today" type="number"> <br> <button class="btn btn-dark" @click.prevent="postTodayData">click here to start your fitness journey</button></h2>
  <table class="table" v-if="todayData.length != 0">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Calories</th>
      <th scope="col">Protein</th>
      <th scope="col">Carbohydrates</th>
      <th scope="col">Fat</th>
      <th scope="col">Current Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{ todayData.date }}</td>
      <td>{{ todayData.calories }}</td>
      <td>{{ todayData.protein }}</td>
      <td>{{ todayData.carbohydrates }}</td>
      <td>{{ todayData.fat }}</td>
      <td>{{ todayData.currentWeight }} Kg</td>
    </tr>
  </tbody>

</table>
<br>

<h2 v-if="todayData.length != 0">Exercise table</h2> <br>
<button v-if="todayData.length != 0" class="btn btn-info" @click.prevent="addExercise">Add Exercise</button>

<table class="table" v-if="todayData.length != 0">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Exercise Name</th>
      <th scope="col">Repetitions</th>
      <th scope="col">Sets</th>
      <th scope="col">Time</th>
      <th scope="col">Notes</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(exercise, idx) in todayData.ExerciseLogs" :key="idx">
      <th>{{ idx + 1 }}</th>
      <td>{{ exercise.exerciseName }}</td>
      <td>{{ exercise.repetitions }}</td>
      <td>{{ exercise.sets }}</td>
      <td>{{ exercise.time }}</td>
      <td>{{ exercise.notes }}</td>
      <td><button @click.prevent="editExercise(exercise.id)" class="btn btn-info">Edit</button> 
      <button @click.prevent="deleteExercise(exercise.id)" class="btn btn-danger">Delete</button></td>
    </tr>
  </tbody>
</table>

<br>
<h2 v-if="todayData.length != 0">Food table</h2> <br>
<button v-if="todayData.length != 0" class="btn btn-info" @click.prevent="addFood">Add Food</button>

<table class="table" v-if="todayData.length != 0">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Exercise Name</th>
      <th scope="col">Calories</th>
      <th scope="col">Protein</th>
      <th scope="col">Carbohydrates</th>
      <th scope="col">Fat</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(food, idx) in todayData.FoodLogs" :key="idx">
      <th>{{ idx + 1 }}</th>
      <td>{{ food.foodName }}</td>
      <td>{{ food.calories }}</td>
      <td>{{ food.protein }}</td>
      <td>{{ food.carbohydrates }}</td>
      <td>{{ food.fat }}</td>
      <td>
      <button @click.prevent="editFood(food.id)" class="btn btn-info">Edit</button>
      <button @click.prevent="deleteFood(food.id)" class="btn btn-danger">Delete</button></td>
    </tr>
  </tbody>
</table>

  </div>
</template>

<script>
export default {
  data () {
    return {
      currentWeight: null
    }
  },
  computed: {
    todayData () {
      return this.$store.state.todayData
    }
  },
  methods: {
    postTodayData () {
      this.$store.dispatch('postTodayData')
    },
    addFood () {
      this.$router.push('/foodList')
    },
    addExercise () {
      console.log('--------------------------------', `addexercise` ,'------------------------------------------');
    },
    editExercise (id) {
      console.log('--------------------------------', id, `edit exercise` ,'------------------------------------------');
    },
    editFood (id) {
      console.log('--------------------------------', id, `edit exercise` ,'------------------------------------------');
    },
    deleteExercise (id) {
      console.log('--------------------------------', id, `delete exercise` ,'------------------------------------------');
    },
    deleteFood (id) {
      this.$store.dispatch('deleteTodayFood', id)
    }
  }
}
</script>

<style>

</style>