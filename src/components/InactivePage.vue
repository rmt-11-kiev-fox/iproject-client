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
        <div class="row h-25">
            <div
                class="
                    col-8
                    mx-auto
                    text-light
                    d-flex
                    flex-column
                    justify-content-end
                    border
                "
            >
                <div class="alert alert-primary">trivia bot is sleeping</div>
            </div>
        </div>
        <div class="row h-25">
            <div
                class="
                    col-8
                    mx-auto
                    d-flex
                    flex-column
                    justify-content-center
                    border
                "
            >
                <button class="btn btn-primary" @click="startTrivia">
                    click to wake him up!
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InactivePage',
    methods: {
        startTrivia() {
            this.$socket.emit('getNewQuestion')
            this.$socket.emit('startTrivia')
            // this.$socket.emit('getNewQuestion')
            // this.$socket.emit('getServerStatus')
        }
    }
}
</script>

<style></style>
