<template>
  <div class="container">
      <div class="d-flex">
      <div class="row">
          <h1 class="text-text-white bg-gradient text-white">This is the title's songs that suited to your location</h1><hr><hr><br>
            <div v-for="dataForTitle in $store.state.dataHome.dataForTitle" :key="dataForTitle.id">
                <h3 class="text-white-50"><a :href="dataForTitle.query" target="_blank">{{ dataForTitle.title }}</a> </h3><hr>
            </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Playlist'
}
</script>
