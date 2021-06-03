<template>
    <div id="home" class="container-fluid h-100">
        <div class="row h-100">
            <!-- chat -->
            <Chatbox />
            <!-- main -->
            <div id="main-container" class="col-6 h-100">
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
            this.$store
                .dispatch('fetchLeaderboard')
                .then((data) => {
                    const foundUser = data.find(
                        (elem) => elem.id === this.$store.state.currentUser.id
                    )
                    this.$store.commit('SET_CURRENT_USER', foundUser)
                    return
                })
                .then(() => {
                    Swal.fire({
                        title: 'Correct answer!',
                        text: `You got ${payload.increment} points. Your points now: ${this.$store.state.currentUser.point}`,
                        icon: 'success',
                        confirmButtonText: 'Nice'
                    }).then(() => {
                        this.$store.dispatch('fetchChats')
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        wrongAnswer(payload) {
            this.$store
                .dispatch('fetchLeaderboard')
                .then((data) => {
                    const foundUser = data.find(
                        (elem) => elem.id === this.$store.state.currentUser.id
                    )
                    this.$store.commit('SET_CURRENT_USER', foundUser)
                    return
                })
                .then(() => {
                    Swal.fire({
                        title: 'Wrong answer!',
                        text: `You got ${payload.decrement} points. Your points now: ${this.$store.state.currentUser.point}`,
                        icon: 'error',
                        confirmButtonText: 'Oh no'
                    }).then(() => {
                        this.$store.dispatch('fetchChats')
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        receiveCorrectAnswer(correctAnswer) {
            console.log('Correct answer:', correctAnswer)
        },
        receiveServerStatus(status) {
            if (status) {
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
