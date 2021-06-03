<template>
  <div class="home">
    <header>
      <button class="button-Chat p-2 align-middle rounded font-semibold shadow-md focus:outline-none bg-Grin just w-1/6 h-10 text-xl text-white bg-center" @click.prevent="Chat= !Chat">ask about favorite anime</button>
      <h1> Search Your Favorite Anime</h1>
      <form class="searchBox" @submit.prevent="HandleSearch">
          <input 
            type="search" 
            class="searchInput focus:bg-Grin focus:placeholder-white" 
            placeholder="Search for an anime..."
            required
            v-model="search_Anime"/>
        </form> 
        <div v-if="Chat" class="chat-box bg-gray-500 absolute bg-opacity-80 inset-0 flex justify-center items-center">
          <div class="chat-logs bg-white p-5 rounded shadow-2x1">
          <div @click.prevent="close" class="close">X</div>
            <div>
              <div class="text-xl font-bold text-Grin pb-5">
              Say Something here..
              </div>
              <div class="chat" v-for="(message,i) in messages" :key="i">
                <p class="chat-message">{{message.Message}}</p>
              </div>

              <!-- <div class="chatfriend">
                <p class="chat-message"></p>
              </div> -->
              <div class="chat-form">
                <form @submit.prevent="AddChat" class="" action="">
                    <div class="mb-3">
                        <!-- <p>{{name}}</p> -->
                        <input class="text-form border border-gray-400" type="text" v-model="Message" placeholder="">
                    </div>
                    <label class="label">
                      <button type="submit" class="chat-button rounded p-2">
                          <div >
                            Add
                          </div>
                      </button>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
    </header>
    <main>
      <div class="CardAnime"> 
        <Card v-for="anime in animes" :key="anime.mal_id" :Animes='anime'>
        </Card> 
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '../components/Card'
export default {
  name: 'Home',
  data(){
    return{
      search_Anime:'',
      Chat:false,
      name:'',
      Message:''
    } 
  },
  components: {
    Card
  },
  methods:{
    HandleSearch (){
      this.$store.dispatch('HandleSearch', {searchAnime:this.search_Anime})
    },
    close(){
      this.Chat=false
    },
    AddChat (){
      // this.$store.commit('setMessage', {Message:this.Message})
      this.$socket.emit('SendMsg', {Message:this.Message})
      this.Message = ''
    }
  },
  computed:{
    animes(){
      console.log(localStorage)
      return this.$store.state.Animes
    },
    messages(){
      return this.$store.state.Messages
    }
  },
  created(){
    this.$store.dispatch('HandleSearch')
    this.name = localStorage.getItem('name')
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Sigmar+One&display=swap');
  
  header {
    padding-top: 50px;
    padding-bottom: 50px;
    }
  
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 30px;
    padding-right: 30px;
  }

  header h1 {
      color: #888;
      font-size: 42px;
      font-weight: 400;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 30px;
      font-family: 'Indie Flower', cursive;
  }
  header .chat-box{
    display: flex;
		justify-content: center;
  }

  .searchBox {
		display: flex;
		justify-content: center;
		padding-left: 30px;
		padding-right: 30px;
  }
  .close{
    font-size: 35px bold;
    color: #f6416c;
    font-weight:bolder;
  }
  .searchInput {
    appearance: none;
    background: none;
    border: none;
    outline: none;
    background-color: #F3F3F3;
    box-shadow: black;
    display: block;
    width: 100%;
    max-width: 600px;
    padding: 15px;
    border-radius: 8px;
    color: #313131;
    font-size: 20px;
    transition: 0.4s;
  }

  .CardAnime{
    display: flex;
		flex-wrap: wrap;
		margin: 0 -8px;
    /* background-color: pink; */
    /* width: 100%;
    height: 100px; */
  }

  .home{
    background-color: #f8f3d4;
  }

  .chat-logs{
    padding: 10px;
    width: 25%;
    height: 600px;
    background-color: #eee;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .chat{
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
  }

  .chatfriend{
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
  }

  .chat .chat-message{
     width: 90%;
     padding: 15px;
     margin: 5px 10px 0;
     background-color:#f6416c;
     border-radius: 10px;
     color: #fff;
     font-size: 15px;
  }

  .chatfriend .chat-message{
    width: 90%;
    padding: 15px;
    margin: 5px 10px 0;
    background-color:#00b8a9;
    border-radius: 10px;
    color: #fff;
    font-size: 15px;
    order: -1;
  }

  .chat-form{
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
  }

  .text-form{
      background-color: #fbfbfb;
      width: 150%;
      height: 50px;
  }

  .chat-button{
    background-color:#f6416c;
    padding: 5px 15px;
    font-size: 20px;
    width: 100px;
    color: #fff;
  }
</style>
