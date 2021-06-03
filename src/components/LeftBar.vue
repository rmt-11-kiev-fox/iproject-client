<template>
    <div id="leftBar" class="col-3 col p-4">
        <h4>Favourites :</h4>
        <ul style="list-style: none;">
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
        <div></div>
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
      this.formIsActive = !this.formIsActive
    },
    closeForm () {
      this.formIsActive = false
    }
  },
  computed: {
    favourites: function () {
      return this.$store.state.favourites
    },
    teamBadge: function () {
      return this.$store.state.favourite.team_badge
    }
  }
}
</script>

<style>

</style>
