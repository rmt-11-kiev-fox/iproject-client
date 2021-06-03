<template>
  <div>
    <ul v-if="this.$route.name === 'QuestionPage'">
      <li v-for="index in 10" :key="index">
        <button class="btn btn-primary" v-if="index <= questionNumber" disabled>Question {{index}}</button>
        <button class="btn btn-dark" v-else disabled>Question {{index}}</button>
      </li>
    </ul>
    <ul v-else>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    questionNumber () {
      return this.$store.state.questionNumber
    }
  }
}
</script>

<style>
  a{
    text-decoration: none;
    color: black;
  }
  ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li{
  margin-top: 25px;
}
</style>
