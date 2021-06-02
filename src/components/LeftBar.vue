<template>
    <div id="leftBar" class="col-3 col">
        <h4>Favourites :</h4>
        <ul>
            <FavouritesList></FavouritesList>
            <li>
                <a @click.prevent="formActive" href="#">Add Favorites</a>
            </li>
        </ul>
        <AddFavourite
            v-if="formIsActive"
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
    }
  }
}
</script>

<style>

</style>
