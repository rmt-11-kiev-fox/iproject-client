<template>
    <div class="col-2" :class="{ left_bar: !isDark, left_bar_dark: isDark }">
        <div class="row">
            <form class="mt-4">
                <input
                    class="form-control"
                    type="search"
                    placeholder="Animal Name"
                    v-model="keyword"
                >
            </form>
        </div>
        <div class="row my-4">
            <router-link
                :to="'/home/favorites'"
                :class="{
                    type_opt: $route.params.type !== 'favorites',
                    type_choosed: $route.params.type === 'favorites'
                }"
                >
                    <h4>
                        My Favorite Animals
                    </h4>
            </router-link>
        </div>
        <div class="row my-4 w-75">
            <h4 class="type_opt">Type:</h4>
            <router-link
                to="/home"
                :class="{
                    type_opt: $route.params.type,
                    type_choosed: !$route.params.type
                }"
                class="ms-4"
                >All
            </router-link>
            <router-link
                :to="'/home/' + type"
                v-for="(type, i) in types"
                :key="i"
                :class="{
                    type_opt: $route.params.type !== type,
                    type_choosed: $route.params.type === type
                }"
                class="ms-4"
                >{{ type }}
            </router-link>
        </div>
        <div class="row my-4">
            <div class="btn-dark col-4 text-center ms-4" @click.prevent="toDark" v-if="!isDark">
                <a class="type_opt">Safari Night</a>
            </div>
            <div class="btn-light col-5 ms-4" @click.prevent="toLight" v-if="isDark">
                <a class="type_opt col-12">Daylight</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Leftbar',
  computed: {
    isDark () {
      return this.$store.state.isDark
    },
    types () {
      return this.$store.state.types
    },
    keyword: {
      get () {
        return this.$store.state.keyword
      },
      set (value) {
        this.$store.commit('SET_KEYWORD', value)
      }
    }
  },
  methods: {
    toDark () {
      this.$store.commit('SET_ISDARK', true)
    },
    toLight () {
      this.$store.commit('SET_ISDARK', false)
    }
  }
}
</script>

<style>
.left_bar {
  background-color: rgba(134, 134, 134, 0.692);
}
.left_bar_dark {
  background-color: rgba(0, 0, 0, 0.74);
}
.type_opt {
    cursor: pointer;
    color: aliceblue;
}
.type_choosed {
    cursor: pointer;
    color: rgb(107, 109, 0);
}
.btn-dark {
  background-image: url('https://i.pinimg.com/originals/6c/04/c6/6c04c6b013470efcb9474cf8e8f0456e.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  border-radius: 7%;
  cursor: pointer;
}
.btn-light {
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 40px;
  background-image: url('https://thumbs.dreamstime.com/b/blue-sky-clouds-sun-daylight-natural-background-199532547.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  border-radius: 7%;
  cursor: pointer;
}
</style>
