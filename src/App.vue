<template>
  <div>
    <div class="container py-3">
      <Header/>
      <router-view/>
    </div>
    <ChatBox/>
  </div>
</template>

<script>
import Header from './components/Header'
import ChatBox from './views/Chatbox'

export default {
  name: 'App',
  components: {
    Header, ChatBox
  }
}
</script>

<style>
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }

  .chat-list{
    padding: 0;
    font-size: .8rem;
  }
  .chat-list li{
    margin-bottom: 10px;
    overflow: auto;
    color: white;
  }

  .chat-list .chat-img{
    float: left;
    width: 48px;
  }

  .chat-list .chat-img img{
    -webkitborder-radius:50px;
    -moz-border-radius:50px;
    border-radius: 50px;
    width: 100%;
  }

  .chat-list .chat-message{
    -webkitborder-radius:50px;
    -moz-border-radius:50px;
    border-radius: 50px;
    background: lightseagreen;
    display: inline-block;
    padding: 10px 20px;
    position: relative;
  }

  .chat-list .chat-message::before{
    content: "";
    position: absolute;
    top: 15px;
    width: 0;
    height: 0;
  }

  .chat-list .chat-message h5{
    margin: 0 0 5px 0;
    font-weight: 600;
    line-height: 100%;
    font-size: .9rem;
  }

  .chat-list .chat-message p{
    line-height: 18px;
    margin: 0;
    padding: 0;
  }

  .chat-list .chat-body{
    margin-left: 20px;
    float: left;
    width: 70%;
  }

  .chat-list .in .chat-message::before{
    left: -12px;
    border-bottom: 20px solid transparent;
    border-right: 20px solid lightseagreen;
  }

  .chat-list .out .chat-body{
    float: right;
    margin-right: 20px;
    text-align: right;
  }

  .chat-list .out .chat-img{
    float: right;
  }

  .chat-list .out .chat-message{
    background: #fc6d4c;
  }

  .chat-list .out .chat-message::before{
    right: -12px;
    border-bottom: 20px solid transparent;
    border-left: 20px solid #fc6d4c;
  }
</style>
