<template>
    <div :class="style.background" class="w-100 text-wrap text-break">
        <span :class="style.username">{{ username }}</span>
        <span :class="style.message">: {{ chat.message }}</span>
    </div>
</template>

<script>
export default {
    name: 'ChatIndividual',
    props: ['chat'],
    computed: {
        username() {
            if (!this.chat.User) return 'TriviaBot'
            return this.chat.User.username
        },
        style() {
            if (!this.chat.User) {
                return {
                    // background: 'bg-light',
                    username: 'text-warning',
                    message: `${
                        this.isCorrectAnswer ? 'text-success' : 'text-danger'
                    }`
                }
            } else {
                return {
                    background: '',
                    username: 'text-primary',
                    message: 'text-light'
                }
            }
        },
        isCorrectAnswer() {
            const point = this.chat.message.split(' ').reverse()[1]
            if (point < 0) {
                return false
            } else {
                return true
            }
        }
    }
}
</script>

<style></style>
