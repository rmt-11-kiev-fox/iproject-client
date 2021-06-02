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

export default {
    name: 'Home',
    components: {
        Chatbox
    },
    sockets: {
        // receiveQuestion(question) {
        //     // this.$store.commit('SET_CURRENT_QUESTION', question)
        // },
        // receiveServerStatus(status) {
        //     // this.$store.commit('SET_SERVER_STATUS', status)
        //     // this.$router.push('/')
        // }
    },
    created() {
        // this.$socket.emit('getServerStatus')
    }
}
</script>

<style></style>
