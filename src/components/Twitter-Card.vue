<template>
    <!--Card-->
    <div class="card rounded col-md-4 cover">
      <div class="card font-bold text-l font-sans mb-2">{{result.text.substring(0, 200)}}
        <span v-if="result.text.length >20">...</span>
      </div>
    </div>

</template>

<script>
export default {
  name: 'TwtCard',
  props: [ 'result' ],
  methods: {

  }
}
</script>

<style>
</style>
