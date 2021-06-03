import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Animes:[],
    Messages:[]
  },
  mutations: {
    setAnimes(commit,payload){
      this.state.Animes=payload
    },
    setMessage(commit,payload){
      this.state.Messages.push(payload)
    },
    SOCKET_sendBack(commit,payload){
      this.state.Messages.push(payload)
    }
  },
  actions: {  
    login(context, payload) {
      axios({
        method:'Post',
        url:"/login",
        data:payload
      }).then(response=>{
        console.log(response)
        localStorage.setItem('access_token', response.data.access_token)
        router.push('/')
        let timerInterval
          Swal.fire({
            title: `Hello ${response.data.name} !!`,
            timer: 900,
            didOpen: () => {
              Swal.showLoading()
              timerInterval = setInterval(() => {
                const content = Swal.getHtmlContainer()
                if (content) {
                  const b = content.querySelector('b')
                  if (b) {
                    b.textContent = Swal.getTimerLeft()
                  }
                }
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })
      }).catch(err=>{
        // console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      })
    },
    gLogin(context,payload){
      // console.log(payload, "ini payload")
      axios({
        method:'Post',
        url:"/glogin",
        data:{id_token:payload}
      }).then(response=>{
        // console.log(response)
        localStorage.setItem('access_token', response.data.access_token)
        router.push('/')
        let timerInterval
          Swal.fire({
            title: `Hello ${response.data.name} !!`,
            timer: 900,
            didOpen: () => {
              Swal.showLoading()
              timerInterval = setInterval(() => {
                const content = Swal.getHtmlContainer()
                if (content) {
                  const b = content.querySelector('b')
                  if (b) {
                    b.textContent = Swal.getTimerLeft()
                  }
                }
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer')
            }
          })
      }).catch(err=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      })
    },
    Regist(context,payload) {
      axios({
        method:"post",
        url:'/register',
        data:payload
      }).then(response=>{
        router.push('/Login')
      }).catch(err=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      })
    },
    HandleSearch (context,payload) {
      console.log(payload)
      axios({
        method:'get',
        url:`/anime/${payload.searchAnime}`,
        headers:{access_token:localStorage.getItem('access_token')}
      }).then(response=>{
        // console.log()
        context.commit('setAnimes', response.data.results)
      }).catch(err=>{ 
        console.log(err)
      })
    }
  },
  modules: {
  }
})
