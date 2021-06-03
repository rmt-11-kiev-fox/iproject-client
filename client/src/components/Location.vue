<template>

<div class="container mt-5 d-flex flex-column-reverse fle">
      <div class="row">
        <div class="col-6">
          <div class="card text-white bg-dark mb-5 mx-5" style="max-width: 18rem;">
            <div class="card-header">{{ $store.state.dataHome.location.country }}</div>
            <div class="card-body">
              <h5 class="card-title">{{ $store.state.dataHome.location.city }}</h5>
              <img :src="$store.state.dataHome.location.flag" alt="Responsive image" class="img-fluid"/>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card text-white bg-dark mx-5" style="max-width: 18rem;">
            <div class="card-header">{{ $store.state.dataHome.weather.main }}</div>
            <div class="card-body">
              <h5 class="card-title">{{ $store.state.dataHome.weather.description }}</h5>
              <img :src="$store.state.dataHome.weather.icon" alt="Responsive image" class="img-fluid"/>
              <h5 class="card-title">{{ $store.state.dataHome.weather.temperature }}</h5>
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script>
export default {
  name: 'Location'
}
</script>
