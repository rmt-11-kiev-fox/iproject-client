<template>
  <div>
    <div class='bg-danger d-flex flex-wrap'>
      <button
      v-for="category in this.categories"
      :key="category.id"
      class="border border-dark col-3"
      style="width:100px"
      @click.prevent="pickTopic(category)"
      >{{category}}</button>
    </div>
    <div>
      <form @submit.prevent="pickTopic(topic)">
        <h3>Pick a topic of your choices</h3>
        <input v-model="topic" type="text">
        <button>Enter</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PickTopic',
  data () {
    return {
      categories: [
        'Sun', 'Night', 'Sunflower', 'Flower', 'Cloud', 'Star', 'Grass', 'Warrior', 'Home', 'Summer', 'Fall', 'Spring', 'Winter'
      ],
      topic: ''
    }
  },
  methods: {
    pickTopic (topic) {
      const payload = topic.toLowerCase()
      this.$store.commit('SET_topic', payload)
      this.$store.dispatch('gameCreate', payload)
      this.$router.push('/game/start')
    }
  }
}
</script>

<style>

</style>
