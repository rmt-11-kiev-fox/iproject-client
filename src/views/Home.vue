<template>
  <div>
    <div>
        <NavBar
        ></NavBar>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

            <RedditCard
              v-for="(result, i) in $store.state.redditResults" :key="i" :result="result"
            />
            
        </div>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

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
