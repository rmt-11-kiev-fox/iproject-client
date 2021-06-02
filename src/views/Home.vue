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
            <Leaderboard />
        </div>
    </div>
</template>

<script>
import Chatbox from '../components/Chatbox'
import Leaderboard from '../components/Leaderboard'

import Swal from 'sweetalert2'

export default {
    name: 'Home',
    components: {
        Chatbox,
        Leaderboard
    },
    sockets: {
        receiveQuestion(question) {
            // console.log('MASUK')
            console.log(question)
            this.$store.commit('SET_CURRENT_QUESTION', question)
        },
        receiveTimeLeft(time) {
            this.$store.commit('SET_TIME_LEFT', time)
        },
        correctAnswer(payload) {
            // console.log('CORRECT ANSWER |', currentCorrectAnswer) // SWAL
            Swal.fire({
                title: 'Correct answer!',
                text: `You got ${payload.increment} points. Your points now: ${payload.newPoint}`,
                icon: 'success',
                confirmButtonText: 'Nice'
            })
        },
        wrongAnswer(payload) {
            // console.log('WRONG ANSWER |', currentCorrectAnswer) // SWAL
            Swal.fire({
                title: 'Wrong answer!',
                text: `You got ${payload.decrement} points. Your points now: ${payload.newPoint}`,
                icon: 'error',
                confirmButtonText: 'Oh no'
            })
        },
        receiveCorrectAnswer(correctAnswer) {
            console.log('Correct answer:', correctAnswer)
        },
        receiveServerStatus(status) {
            if (!status) {
                this.$router.push('/inactive')
            } else {
                this.$store.commit('SET_SERVER_STATUS', status)
                this.$router.push('/')
            }
        },
        startTrivia() {
            this.$router.push('/')
            this.$socket.emit('getServerStatus')
        }
    },
    created() {
        this.$socket.emit('getServerStatus')
        this.$socket.emit('getCurrentQuestion')
    }
}
</script>

<style></style>
