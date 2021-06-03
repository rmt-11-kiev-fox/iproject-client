<template>
  <div>
    <!--Card-->
    <div class="cardd cover rounded overflow-hidden shadow-lg">
        <div class="font-bold text-xl mb-2">{{result.text}}</div>
        <!-- <div class="link px-6 pt-4 pb-2">
          <a :href="result.url" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Read More</a>
        </div> -->
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
