<template>
    <div id="leftBar" class="col-3 col">
        <h4>Favourites :</h4>
        <ul>
            <FavouritesList
              v-for="favourite in favourites" :key="favourite.id"
              :favourite="favourite"
            ></FavouritesList>
            <li>
                <a @click.prevent="formActive" href="#">Add Favorites</a>
            </li>
        </ul>
        <AddFavourite
            v-if="formIsActive"
            @hideFormFavourite="closeForm"
        />
    </div>
</template>

<script>
import FavouritesList from './FavouritesList'
import AddFavourite from './AddFavourite'
export default {
  name: 'LeftBar',
  components: {
    FavouritesList,
    AddFavourite
  },
  data () {
    return {
      formIsActive: false
    }
  },
  methods: {
    formActive () {
      this.formIsActive = true
    },
    closeForm () {
      this.formIsActive = false
    }
  },
  computed: {
    favourites: function () {
      return this.$store.state.favourites
    }
  }
}
</script>

<style>

</style>
