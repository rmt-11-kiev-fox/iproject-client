<template>
    <div
        class="
            container
            h-100
            text-center
            d-flex
            flex-column
            justify-content-center
        "
    >
        <div class="row h-50">
            <div
                class="
                    col-8
                    mx-auto
                    text-light
                    d-flex
                    flex-column
                    justify-content-center
                "
            >
                <div class="alert alert-warning">Time left: {{ timeLeft }}</div>
                <div class="badge bg-dark">
                    Category: {{ question.category }}
                </div>
                <div class="alert alert-primary">Question:</div>
                <!-- <div class="alert alert-info"></div> -->
                <div class="alert alert-info" v-html="question.question"></div>
            </div>
        </div>
        <div class="row h-50">
            <div
                class="
                    col-12
                    mx-auto
                    d-flex
                    flex-column
                    justify-content-center
                    h-100
                "
            >
                <div class="container h-100">
                    <div class="row h-100">
                        <AnswerButton
                            v-for="(answer, i) in question.answers"
                            :key="i"
                            :answer="answer"
                            @submitAnswer="submitAnswer"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AnswerButton from './AnswerButton'

export default {
    name: 'ActivePage',
    data() {
        return {
            submittedAnswer: false
        }
    },
    components: {
        AnswerButton
    },
    computed: {
        question() {
            return this.$store.state.currentQuestion
        },
        timeLeft() {
            return this.$store.state.timeLeft
        }
        // isActiveServer() {
        //     // return this.$store.state.isActiveServer
        // }
    },
    watch: {
        question() {
            this.submittedAnswer = false
            // console.log(this.submittedAnswer)
        }
    },
    methods: {
        submitAnswer(answer) {
            // console.log('MASUK')
            if (!this.submittedAnswer) {
                // console.log(answer)
                const { currentUser, timeLeft } = this.$store.state
                this.$socket.emit('submitAnswer', {
                    currentUser,
                    timeLeft,
                    answer
                })
            }
            this.submittedAnswer = true
            // console.log(this.submittedAnswer)
        }
    }
    // created() {
    // }
}
</script>

<style></style>
