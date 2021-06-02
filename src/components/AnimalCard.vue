<template>
    <div class="card col-auto mx-3 my-4 rounded" style="width: 18rem;">
        <div class="card-body">
            <p>🖤 {{ animal.totalFavorite }} people like this</p>
            <img class="img-fluid rounded" :src="animal.image_URL" alt="">
            <h5 class="card-title my-4">{{ animal.name }}</h5>
            <p>Type: <a :href="'https://en.wikipedia.org/wiki/' + animal.type">{{ animal.type }}</a></p>
            <p>Habitat: <a :href="'https://en.wikipedia.org/wiki/' + animal.habitat">{{ animal.habitat }}</a></p>
            <audio controls>
                <source src="../assets/badgers.wav" type="audio/wav">
                Your browser does not support the audio element.
            </audio>
            <a @click.prevent="openDesc" class="desc-btn">See Details</a>
            <p class="card-text" v-if="desc_open">{{ animal.description }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AnimalCard',
  props: ['animal'],
  data () {
    return {
      desc_open: false
    }
  },
  methods: {
    openDesc () {
      if (this.desc_open === true) {
        this.desc_open = false
      } else {
        this.desc_open = true
      }
    }
  }
}
</script>

<style>
.desc-btn {
  cursor: pointer;
}
</style>
