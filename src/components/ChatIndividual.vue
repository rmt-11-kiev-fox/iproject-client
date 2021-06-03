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
                    background: `${
                        this.isCorrectAnswerBroadcast ? 'bg-light' : ''
                    }`,
                    username: `${
                        this.isCorrectAnswerBroadcast
                            ? 'text-danger'
                            : 'text-warning'
                    }`,
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
        },
        isCorrectAnswerBroadcast() {
            const splitted = this.chat.message.split(' ')
            if (splitted[0] === 'Correct' && splitted[1] === 'answer:')
                return true
            return false
        }
    }
}
</script>

<style></style>
