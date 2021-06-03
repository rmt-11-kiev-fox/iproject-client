<template>
  <div>
    {{time1}}
  </div>
</template>

<script>
import moment from 'moment'
import { io } from 'socket.io-client'
const socket = io('http://localhost:3000')
export default {
  data() {
    return {
      time1: 0
    }
  },
  props: ['time', 'id'],

  mounted(){
    this.time1 =  moment().format('MMMM DD YYYY, hh:mm:ss')

  },
  updated(){
    if (this.time1 < this.time){
      console.log('id', this.id)
      console.log(socket.emit(`closeBid`, true))
      setTimeout(() =>  {
        this.time1 = moment().add(1, 'second').format('MMMM Do YYYY, hh:mm:ss')
      }, 1000)
    } else {
      console.log(this.id)
    }
  }
}
</script>

<style>

</style>
