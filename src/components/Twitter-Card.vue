<template>
    <!--Card-->
    <div class="col-md-4 cover">
      <img class="thumbnail" :src="result.thumbnail" onerror="this.onerror=null; this.src='https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'">
      <div class="card px-6 py-4">
      <div class="font-bold text-xl mb-2">{{result.text.substring(0, 100)}}
        <span v-if="result.text.length >20">...</span>
      </div>
      <div class="link px-6 pt-4 pb-2">
          <a :href="result.url" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Read More</a>
        </div>
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
