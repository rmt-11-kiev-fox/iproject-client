<template>
  <div>
    {{time1}}
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      time1: 0
    }
  },
  props: ['time'],

  mounted(){
    this.time1 =  moment().format('MMMM DD YYYY, hh:mm:ss')

  },
  updated(){
    if (this.time1 < this.time){
      setTimeout(() =>  {
        this.time1 = moment().add(1, 'second').format('MMMM Do YYYY, hh:mm:ss')
      }, 1000)
    }
  }
}
</script>

<style>

</style>
