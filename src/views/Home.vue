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
            // console.log('MASUK')
            console.log(question)
            this.$store.commit('SET_CURRENT_QUESTION', question)
        },
        receiveTimeLeft(time) {
            this.$store.commit('SET_TIME_LEFT', time)
        },
        correctAnswer() {
            // console.log('CORRECT ANSWER |', currentCorrectAnswer) // SWAL
            Swal.fire({
                title: 'Correct answer!',
                text: 'You got 50 points',
                icon: 'success',
                confirmButtonText: 'Nice'
            })
        },
        wrongAnswer() {
            // console.log('WRONG ANSWER |', currentCorrectAnswer) // SWAL
            Swal.fire({
                title: 'Wrong answer!',
                text: 'You got -5 points',
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
