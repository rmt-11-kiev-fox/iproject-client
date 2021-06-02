<template>
    <div class="card col-auto mx-3 my-4 rounded animal-card mb-4" style="width: 18rem;">
        <div class="card-body">
            <p>
              <a
                v-if="!isFavorite"
                class="btn"
                @click.prevent="addToFavorite"
                >🖤
              </a>
              <a
                v-if="isFavorite"
                class="btn"
                @click.prevent="removeFromFavorite"
                >❤️
              </a>
              {{ animal.totalFavorite }} people like this
            </p>
            <img class="img-fluid rounded" :src="animal.image_URL" alt="">
            <h5 class="card-title my-4">{{ animal.name }}</h5>
            <p>
              Type:
              <a class="desc" :href="'https://en.wikipedia.org/wiki/' + animal.type">
              {{ animal.type }}</a>
            </p>
            <p>
              Habitat:
              <a class="desc" :href="'https://en.wikipedia.org/wiki/' + animal.habitat">
              {{ animal.habitat }}</a>
            </p>
            <a @click.prevent="openDesc" class="desc">See Details</a>
            <p class="card-text" v-if="desc_open">{{ animal.description }}</p>
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
    },
    addToFavorite () {
      this.$store.dispatch('addToFavorite', this.animal.id)
    },
    removeFromFavorite () {
      this.$store.dispatch('removeFromFavorite', this.animal.id)
    }
  },
  computed: {
    isFavorite () {
      let flag = false
      this.$store.state.favorites.forEach((element) => {
        if (element === this.animal.name) {
          flag = true
        }
      })
      return flag
    }
  }
}
</script>

<style>
.desc {
  cursor: pointer;
  color: aliceblue;
}
.animal-card {
  background-color: rgb(0, 114, 25);
  color: aliceblue;
}
.desc {
  color: aliceblue;
}
</style>
