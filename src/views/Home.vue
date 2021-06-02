<template>
    <div class="container-fluid h-100">
        <div class="row h-100">
            <!-- chat -->
            <Chatbox />
            <!-- main -->
            <div class="col-6 border h-100">
                <router-view />
            </div>
            <!-- leaderboard -->
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
import Chatbox from '../components/Chatbox'
import Swal from 'sweetalert2'

export default {
    name: 'Home',
    components: {
        Chatbox
    },
    sockets: {
        receiveQuestion(question) {
            this.$store.commit('SET_CURRENT_QUESTION', question)
        },
        receiveTimeLeft(time) {
            this.$store.commit('SET_TIME_LEFT', time)
        },
        correctAnswer(currentCorrectAnswer) {
            // console.log('CORRECT ANSWER |', currentCorrectAnswer) // SWAL
            Swal.fire({
                title: 'Correct!',
                text: `Correct answer: ${currentCorrectAnswer}`,
                icon: 'success',
                confirmButtonText: 'Nice'
            })
        },
        wrongAnswer(currentCorrectAnswer) {
            // console.log('WRONG ANSWER |', currentCorrectAnswer) // SWAL
            Swal.fire({
                title: 'Wrong!',
                text: `Correct answer: ${currentCorrectAnswer}`,
                icon: 'error',
                confirmButtonText: 'Nice'
            })
        }
    },
    created() {
        this.$socket.emit('getCurrentQuestion')
    }
}
</script>

<style></style>
