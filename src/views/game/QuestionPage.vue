<template>
  <div>
    <div class="mt-2"><h2>Question {{questionNumber}}</h2></div>
    <div>
      <img :src="question.imageUrl" height="400px" width="400px" alt="" srcset="">
      <div class="mt-4">
        <p>What is the name of this piece of art?</p>
      </div>
      <div class="d-flex flex-wrap justify-content-center">
        <AnswerButton
          v-for="(answer, index) in answers"
          :key="answer.id"
          :answer='answer'
          :index='index'
          :questionId='questionId'
          :questionNumber='questionNumber'
          :topic='topic'
          :GameId='GameId'
        ></AnswerButton>
      </div>
    </div>
  </div>
</template>

<script>
import AnswerButton from '../../components/AnswerButton'
export default {
  name: 'QuestionPage',
  components: {
    AnswerButton
  },
  computed: {
    questionNumber () {
      return this.$store.state.questionNumber
    },
    topic () {
      return this.$store.state.topic
    },
    GameId () {
      return this.$store.state.GameId
    },
    answers () {
      return this.$store.state.answers
    },
    question () {
      return this.$store.state.question
    },
    questionId () {
      return this.$store.state.questionId
    }
  },
  methods: {
    pickAnswer (index) {
      const alphabet = ['a', 'b', 'c', 'd']
      const payload = {
        answer: alphabet[index],
        questionId: this.questionId,
        questionNumber: this.questionNumber
      }
      this.$store.dispatch('userAnswer', payload)
        .then(() => {
          let questionNumber = payload.questionNumber
          questionNumber++
          if (questionNumber === 11) {
            this.$store.commit('SET_questionNumberReset')
            this.$store.dispatch('calculateScore', this.GameId)
            // this.$router.push('/game/end')
          } else {
            const payload = {
              topic: this.topic,
              GameId: this.GameId,
              questionNumber: this.questionNumber
            }
            this.$store.commit('SET_questionNumber', questionNumber)
            this.$router.push(`/game/question/${questionNumber}`)
            this.$store.dispatch('fetchQuestion', payload)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    const payload = {
      topic: this.topic,
      GameId: this.GameId,
      questionNumber: this.questionNumber
    }
    this.$store.dispatch('fetchQuestion', payload)
  }
}
</script>

<style>

</style>
