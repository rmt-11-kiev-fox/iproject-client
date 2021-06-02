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
                        <div class="col-6 btn btn-success">
                            A. {{ question.answers[0] }}
                        </div>
                        <div class="col-6 btn btn-info">
                            B. {{ question.answers[1] }}
                        </div>
                        <div class="col-6 btn btn-primary">
                            C. {{ question.answers[2] }}
                        </div>
                        <div class="col-6 btn btn-secondary">
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
        question() {
            return this.$store.state.currentQuestion
        },
        timeLeft() {
            return this.$store.state.timeLeft
        }
        // isActiveServer() {
        //     // return this.$store.state.isActiveServer
        // }
    }
}
</script>

<style></style>
