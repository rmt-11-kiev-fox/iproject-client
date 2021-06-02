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
            @click="submitAnswer"
        >
            {{ letter }}. {{ answer }}
        </div>
    </div>
</template>

<script>
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
            this.$emit('submitAnswer', this.answer)
        }
    }
}
</script>

<style></style>
