<template>
  <div class="user-menu__container">
    <div
      class="user-menu__container-item"
      v-for="item in arr"
      :key="item.title"
      :class="
        ((item.value === '/' && $route.name === 'LiveBid') ||
          item.value === $route.path) &&
          'active-tab'
      "
      @click="changeTabHandler(item.value)"
      v-show="item.status"
    >
      <i class="fas icon" :class="item.icon"></i>
      {{ item.title }}
    </div>
    <div class="logout" @click="logoutHandler">Logout</div>
  </div>
</template>

<script>
export default {
  props: ['activeTab'],
  data() {
    return {
      arr: [
        {
          title: 'Dashboard',
          icon: 'fa-home',
          value: '/',
          status: this.$store.state.userRole === 'buyer'
        },
        {
          title: 'Favorite',
          icon: 'fa-star',
          value: '/favorite',
          status: this.$store.state.userRole === 'buyer'
        },
        {
          title: 'List Product',
          icon: 'fa-stream',
          value: '/list',
          status: this.$store.state.userRole === 'seller'
        },
        // { title: 'On Going', icon: 'fa-eye', value: '/on-going',status: getRoleHandler === 'buyer' },
        {
          title: 'History',
          icon: 'fa-shopping-cart',
          value: '/history',
          status: this.$store.state.userRole
        },
        {
          title: 'Chat',
          icon: 'fa-comment',
          value: '/chat',
          status: this.$store.state.userRole
        }
      ]
    }
  },
  created() {
    if (
      this.$route.path !== '/list' &&
      this.$store.state.userRole === 'seller'
    ) {
      this.$router.push('/list')
    }
  },
  methods: {
    changeTabHandler(val) {
      this.$router.push(val)
    },
    logoutHandler() {
      this.$store.commit('LOGOUT_HANDLER')
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
