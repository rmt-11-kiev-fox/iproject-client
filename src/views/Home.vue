<template>
  <div>
    <div>
        <NavBar
        ></NavBar>
        <div class="justify-center item-center my-9 grid grid-cols gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

        <RedditCard
          v-for="(result, i) in $store.state.redditResults" :key="i" :result="result"
        />
        <TwitterCard
          v-for="(result, i) in $store.state.twitterResults" :key="i" :result="result"
        />
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar'
import RedditCard from '../components/Reddit-Card'
import TwitterCard from '../components/Twitter-Card'

export default {
  name: 'Home',
  components: {
    NavBar,RedditCard,TwitterCard
  },
}
</script>
