<template>
  <div id="app">
    <router-view/>
    <HFooter style="width: 100%; position: fixed;"></HFooter>
  </div>
</template>
<script>
import HFooter from 'vue-hacktiv8-footer'

export default {
  components: {
    HFooter
  }
}
</script>

<style>

</style>
