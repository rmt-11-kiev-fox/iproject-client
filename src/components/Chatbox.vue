<template>
    <div class="col-3 h-100">
        <!-- <div class="border h-90 w-100 overflow-scroll"> -->
        <div class="h-90 w-100 d-flex flex-column-reverse overflow-scroll">
            <div
                class="w-100 text-wrap text-break"
                v-for="(chat, i) in chats"
                :key="i"
            >
                <span class="text-info">{{
                    chat.User ? chat.User.username : 'TriviaBot'
                }}</span>
                <span class="text-light bg-success">: {{ chat.message }}</span>

                <!-- <div>
                    <span class="text-primary">{{ chat.username }}</span
                    >:
                </div>
                <div>
                    {{ chat.message }}
                </div> -->
            </div>
        </div>
        <div class="h-10">
            <form
                class="h-100 d-flex align-items-center"
                @submit.prevent="submitChat"
            >
                <input
                    type="text"
                    class="form-control"
                    id="chat-box"
                    placeholder="insert chat here"
                    v-model="chatMessage"
                />
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Chatbox',
    data() {
        return {
            chatMessage: ''
        }
    },
    computed: {
        chats() {
            return this.$store.state.chats
        }
    },
    methods: {
        submitChat() {
            const message = this.chatMessage
            this.$store
                .dispatch('createChat', {
                    message
                })
                .then(() => {
                    this.$socket.emit('submitChat')
                    // this.$socket.emit('getQuestion') //
                    this.chatMessage = ''
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    sockets: {
        receiveChat() {
            this.$store.dispatch('fetchChats')
        }
        // receiveQuestion(question) {
        //     console.log(question)
        // }
    },
    created() {
        this.$store.dispatch('fetchChats')
    }
}
</script>

<style></style>
