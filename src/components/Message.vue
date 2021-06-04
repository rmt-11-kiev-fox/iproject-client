<template>
    <div>
        <li v-if="message.username == currentUser" class="in">
            <div class="chat-img">
            <img alt="avatar" src="https://thumbs.dreamstime.com/b/female-doctor-portrait-smiling-woman-her-arms-crossed-34896061.jpg">
            </div>
            <div class="chat-body">
            <div class="chat-message">
                <h5>{{message.username}}</h5>
                <p>{{message.message}}</p>
            </div>
            </div>
        </li>
        <li v-else class="out">
            <div class="chat-img">
            <img alt="avatar" src="https://thumbs.dreamstime.com/b/female-doctor-portrait-smiling-woman-her-arms-crossed-34896061.jpg">
            </div>
            <div class="chat-body">
            <div class="chat-message">
                <h5>{{message.username}}</h5>
                <p>{{message.message}}</p>
            </div>
            </div>
        </li>
    </div>
</template>

<script>
export default {
 props: ['message','currentUser']
}
</script>

<style>

</style>