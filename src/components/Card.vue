<template>
  <div class="card hover:scale-50">
		<a href="" target="_blank">
			<img
                class="imageUrl" 
				:src="Animes.image_url" 
			/>
			<h2 class="text-Pinkky text-lg py-2">{{Animes.title}}</h2>
		</a>
	</div>
</template>

<script>
export default {
    name:"Card",
    props:["Animes"]

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Sigmar+One&display=swap');
.card {
	flex: 1 1 33%;
	width: 33%;
	max-width: 33%;
	padding: 10px 10px;
	margin-bottom: 16px;
}

.imageUrl{
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0px 10px 10px  rgba(0, 0, 0, 0.15);
}

h2{
    font-family: 'Indie Flower', cursive;
}

</style>