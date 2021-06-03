<template>
  <div class="user-info__container">
    <div class="user-info__container-image">
      <img :src="headerImageHander" class="image" />
    </div>
    <div class="user-info__container-name">
      {{ usernameHandler || 'User' }}
    </div>
    <div class="user-info__container-role">
      {{ userRoleHandler || 'not admin' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderDashboard',
  computed: {
    headerImageHander() {
      return this.$store.state.userImage
    },
    usernameHandler() {
      return this.$store.state.userName
    },
    userRoleHandler() {
      return this.$store.state.userRole
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
