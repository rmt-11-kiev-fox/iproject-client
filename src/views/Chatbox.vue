<template>
  <div
    class="modal fade"
    id="form-chat"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    >
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Chat Dengan Bidan</h5>
                <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">
              <ul class="chat-list">
                <Message v-for="(message, i) in messages" :key="i" :message="message" :currentUser="username"/>
              </ul>
            </div>
            <div class="mx-3 mb-3">
              <form @submit.prevent="sendMessage">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="message"></textarea>
                <button class="btn btn-success mt-2" type="submit">send</button>
              </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Message from '../components/Message'

export default {
  name: 'Chatbox',
  data () {
      return {
          username: '',
          message: ''
      }
  },
  computed: {
    messages () {
        return this.$store.state.messages
    }
  },
  created () {
      this.username = localStorage.getItem('username')
      this.$store.dispatch('rundomAvatar')
  },
  methods: {
      sendMessage () {
          //this.$store.commit('SEND_MESSAGE', {username: this.username, message: this.message})
          this.$socket.emit('onSendMessage', {username: this.username, message: this.message})
          this.message = ''
      }
  },
  components: {
      Message
  }
}
</script>

<style>

</style>
