<template>
    <div class="col-3 h-100">
        <!-- <div class="border h-90 w-100 overflow-scroll"> -->
        <div class="h-90 w-100 d-flex flex-column-reverse overflow-scroll">
            <ChatIndividual v-for="(chat, i) in chats" :key="i" :chat="chat" />
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
import ChatIndividual from './ChatIndividual'

export default {
    name: 'Chatbox',
    components: {
        ChatIndividual
    },
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
    },
    created() {
        this.$store.dispatch('fetchChats')
    }
}
</script>

<style></style>
