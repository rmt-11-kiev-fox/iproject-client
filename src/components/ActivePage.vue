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
                <div class="badge bg-dark">
                    Category: {{ question.category }}
                </div>
                <div class="alert alert-primary">Question:</div>
                <div class="alert alert-info">{{ question.question }}</div>
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
                        <div class="col-6 border">
                            A. {{ question.answers[0] }}
                        </div>
                        <div class="col-6 border">
                            B. {{ question.answers[1] }}
                        </div>
                        <div class="col-6 border">
                            C. {{ question.answers[2] }}
                        </div>
                        <div class="col-6 border">
                            D. {{ question.answers[3] }}
                        </div>
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
