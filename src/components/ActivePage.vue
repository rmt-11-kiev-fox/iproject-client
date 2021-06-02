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
                <div class="badge bg-dark">Category: {{}}</div>
                <div class="alert alert-primary">Question:</div>
                <div class="alert alert-info">{{}}</div>
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
                        <div class="col-6 border">A. {{}}</div>
                        <div class="col-6 border">B. {{}}</div>
                        <div class="col-6 border">C. {{}}</div>
                        <div class="col-6 border">D. {{}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ActivePage',
    computed: {
        // question() {
        //     // return this.$store.state.currentQuestion
        // },
        // isActiveServer() {
        //     // return this.$store.state.isActiveServer
        // }
        timeLeft() {
            return this.$store.state.timeLeft
        }
    },
    sockets: {
        // receiveQuestion(currentQuestion) {
        //     // this.$store.commit('SET_CURRENT_QUESTION', currentQuestion)
        // }
    },
    created() {
        // if (!this.isActiveServer) return this.$router.push('/inactive')
        // this.$socket.emit('getCurrentQuestion')
    }
}
</script>

<style></style>
