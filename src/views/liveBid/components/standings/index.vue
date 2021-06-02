<template>
  <div class="winner-container">
    <div class="floating-button" @click="resuffle">
      <i class="fas fa-crown icon"></i>Standings
    </div>
    <transition-group name="flip-list" tag="div">
      <div
        class="floating-button child"
        v-for="(item, idx) in standings"
        :key="item.name"
      >
        {{ idx + 1 }}. {{ item.name }} [ {{ item.val }}]
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Standings',
  data() {
    return {
      standings: [
        { name: 'Kevin Anggara', val: 'Rp 250.000' },
        { name: 'Joni wik', val: 'Rp 250.000' },
        { name: 'Monica Sezoro', val: 'Rp 250.000' }
      ]
    }
  },
  methods: {
    resuffle() {
      this.standings = [
        { name: 'Joni wik', val: 'Rp 250.000' },
        { name: 'Kevin Anggara', val: 'Rp 250.000' },
        { name: 'Monica Sezoro', val: 'Rp 250.000' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
