<template>
  <div>
    <!--Card-->
    <div class="col-md-4 cover">
      <img class="thumbnail" :src="result.thumbnail" onerror="this.onerror=null; this.src='https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg'">
      <div class="card px-6 py-4">
        <div class="font-bold text-xl mb-2">{{result.title.substring(0, 20)}}
          <span v-if="result.title.length > 20">...</span>
        </div>
        <div class="link px-6 pt-4 pb-2">
          <a :href="result.url" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Read More</a>
        </div>
      </div>
    </div><br>
  </div>
</template>

<script>
export default {
  name: 'Twitter-Card',
  props: [ 'result' ],
  methods: {

  }
}
</script>

<style>
</style>
