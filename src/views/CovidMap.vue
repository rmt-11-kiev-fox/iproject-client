<template>
	<div class="covidmap d-flex flex-column justify-content-center align-items-center">
		<h3>Stay Safe and Stay Healthy</h3>
		<GmapMap :center="{ lat: $store.state.location.lat, lng: $store.state.location.lng }" :zoom="10" map-type-id="roadmap" class="gmap">
			<GmapInfoWindow :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen = false" />
			<GmapMarker
				:key="index"
				v-for="(marker, index) in markers"
				:position="{
					lat: marker.latitude,
					lng: marker.longitude,
				}"
				:clickable="true"
				@click="toggleInfoWindow(marker, index)"
			/>
		</GmapMap>
	</div>
</template>

<script>
export default {
	data() {
		return {
			infoWindowPos: null,
			infoWinOpen: false,
			currentMidx: null,
			infoOptions: {
				content: "",
				pixelOffset: {
					width: 0,
					height: -35,
				},
			},
		};
	},
	computed: {
		markers() {
			return this.$store.state.covidMarker;
		},
	},
	methods: {
		toggleInfoWindow(marker, index) {
			this.infoWindowPos = {
				lat: marker.latitude,
				lng: marker.longitude,
			};
			this.infoOptions.content = `
			<div class="mx-2 my-3">
				<h5 class="text-center">${marker.Provinsi}</h5>
				<table class="table table-sm">
					<thead>
						<tr>
							<th scope="col">Confirmed</th>
							<th scope="col">Recovered</th>
							<th scope="col">Deaths</th>
							<th scope="col">Active Cases</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>${marker.Confirmed}</td>
							<td>${marker.Recovered} </td>
							<td>${marker.Deaths} </td>
							<td>${marker["Active cases"]}</td>
						</tr>
					</tbody>
				</table>
			</div>
			`;
			//check if its the same marker that was selected if yes toggle
			if (this.currentMidx == index) {
				this.infoWinOpen = !this.infoWinOpen;
			}
			//if different marker set infowindow to open and reset current marker index
			else {
				this.infoWinOpen = true;
				this.currentMidx = index;
			}
		},
	},
};
</script>

<style>
.covidmap {
	width: 100vw;
	height: 100vh;
	background-image: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url("../assets/bg-home.png");
	background-size: 100% 100%;
	background-repeat: no-repeat;
}
.gmap {
	height: 75%;
	width: 75%;
}
</style>
