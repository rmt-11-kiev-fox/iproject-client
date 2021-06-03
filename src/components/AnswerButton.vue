<template>
  <button
  class="btn btn-outline-dark col-6 overflow-hidden"
  @click.prevent="pickAnswer(index)">{{alphabet}}. {{answer.title}}</button>
</template>

<script>
export default {
  name: 'AnswerButton',
  data () {
    return {
      alphabet: ''
    }
  },
  props: [
    'index', 'answer', 'questionId', 'questionNumber',
    'topic', 'GameId'
  ],
  created () {
    const dictionary = ['a', 'b', 'c', 'd']
    this.alphabet = dictionary[this.index]
  },
  methods: {
    pickAnswer (index) {
      const alphabet = ['a', 'b', 'c', 'd']
      const payload = {
        answer: alphabet[index],
        questionId: this.questionId,
        questionNumber: this.questionNumber
      }
      console.log(payload)
      this.$store.dispatch('userAnswer', payload)
        .then(() => {
          let questionNumber = payload.questionNumber
          questionNumber++
          if (questionNumber >= 11) {
            this.$store.commit('SET_questionNumberReset')
            this.$store.dispatch('calculateScore', this.GameId)
            this.$router.push('/game/end')
          } else {
            const payload = {
              topic: this.topic,
              GameId: this.GameId,
              questionNumber: this.questionNumber
            }
            console.log(questionNumber)
            console.log(payload)
            this.$store.commit('SET_questionNumber', questionNumber)
            this.$router.push(`/game/question/${questionNumber}`)
            this.$store.dispatch('fetchQuestion', payload)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
