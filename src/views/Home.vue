<template>
  <div class="home">
    <NavBar/>
    <div class="row d-flex flex-row">
      <LeftBar/>
      <div class="col-9 d-flex flex-column display-content">
        <div class="d-flex flex-row matches"></div>
        <div class="d-flex flex-row co-nav-bar navbar justify-content-around">
          <div>
            <router-link to="/standings">STANDINGS</router-link>
          </div>
          <div>
            <router-link to="/players">PLAYERS</router-link>
          </div>
          <div>
            <router-link to="/news">NEWS</router-link>
          </div>
        </div>
        <div class="route-view-display">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar'
import LeftBar from '../components/LeftBar'
export default {
  name: 'Home',
  components: {
    NavBar,
    LeftBar
  },
  methods: {
  }
}
</script>
