<template>
  <div class="col-5 d-flex align-items-stretch m-3">
    <div class="card text-center">
      <img src="" class="card-img-top img-fluid " />
      <div class="card-body">
        <p class="card-text"> {{ data.title }} </p>
        <p class="card-text"> Type: {{ data.type }} </p>
        <p class="card-text"> Publisher: {{ data.publisher }} </p>
      </div>
      <div class="card-body">
        <a :href="data.link" class="btn btn-primary btn-sm mr-1" role="button"> See this! </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['data']
}
</script>

<style>

</style>
