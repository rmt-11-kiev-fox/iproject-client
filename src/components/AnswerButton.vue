<template>
    <div class="col-6 h-50 w-50 border d-flex align-items-center">
        <div
            class="
                btn btn-dark
                h-50
                w-100
                text-wrap text-break
                d-flex
                align-items-center
            "
            v-html="`${letter}. ${answer}`"
            @click="submitAnswer"
        ></div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: 'AnswerButton',
    props: ['answer'],
    computed: {
        letter() {
            switch (this.$vnode.key) {
                case 0:
                    return 'A'
                case 1:
                    return 'B'
                case 2:
                    return 'C'
                case 3:
                    return 'D'
                default:
                    return '<letter>'
            }
        }
    },
    methods: {
        submitAnswer() {
            if (this.$store.state.timeLeft === 0) {
                Swal.fire({
                    title: "Time's up!",
                    text: 'Maybe click faster next time :)',
                    icon: 'warning',
                    confirmButtonText: 'Too bad'
                })
            } else {
                this.$emit('submitAnswer', this.answer)
            }
        }
    }
}
</script>

<style></style>
