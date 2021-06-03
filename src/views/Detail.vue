<template>
	<div id="detail">
		<div class="container h-100">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div :class="$store.state.seeDirection ? 'col-md-4 col-sm-12' : 'col-12'" class="d-flex justify-content-center align-items-center">
					<div class="card">
						<div class="box">
							<div class="img">
								<img :src="place.icon" />
							</div>
							<h2>
								{{ place.name }}
								<br />
								<br />
								<span v-for="(type, i) in place.types" :key="i" class="mx-1">
									{{ type }}
								</span>
							</h2>
							<p>{{ place.vicinity }}</p>
							<div class="d-flex justify-content-center mb-2">
								<StarRating :increment="0.1" :rating="place.rating" :max-rating="5" :read-only="true" :show-rating="false" :star-size="20" slot="rating" />
							</div>
							<p class="post-author" v-if="place.opening_hours">{{ place.opening_hours.open_now ? "Is Open" : "Not Open Yet" }}</p>
							<button class="btn btn-outline-success" @click.prevent="seeDirection">See Direction</button>
						</div>
					</div>
				</div>
				<div class="col-8" v-if="$store.state.seeDirection">
					<iframe width="700px" height="500px" style="border:0" loading="lazy" allowfullscreen :src="src"> </iframe>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import StarRating from "vue-star-rating";
import Swal from "sweetalert2";

export default {
	name: "Detail",
	data() {
		return {
			src: "",
		};
	},
	created() {
		if (!Object.keys(this.$store.state.place).length) {
			this.$router.push("/").catch(() => {});
		}
	},
	computed: {
		place() {
			return this.$store.state.place;
		},
		location() {
			return this.$store.state.location;
		},
	},
	components: {
		StarRating,
	},
	methods: {
		seeDirection() {
			if (this.$store.state.isAuthenticate || localStorage.getItem("manis_token")) {
				let origin = { lat: this.location.lat ? this.location.lat : "", lng: this.location.lng ? this.location.lng : "" };
				let destination = `place_id:${this.place.place_id}`;
				let url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBgpC1SC7h63uaj1352XOJLqxet94MCdlE`;
				this.src = `${url}&origin=${origin}&destination=${destination}`;
				this.$store.commit("SET_DIRECTION", true);
			} else {
				Swal.fire({
					title: "You need to login before you can use this feature",
					icon: "warning",
					showCancelButton: true,
					confirmButtonText: `Login`,
				}).then((result) => {
					if (result.isConfirmed) {
						this.$router.push("/login").catch(() => {});
					}
				});
			}
		},
	},
};
</script>

<style scoped>
iframe {
	border-radius: 20px;
}
#detail {
	background-image: url("../assets/bg-home.png");
	background-size: 100% 100%;
	background-repeat: no-repeat;
	height: 100vh;
}
.card {
	/* position: absolute; */
	/* top: 50%; */
	/* left: 50%; */
	/* transform: translate(-50%, -50%); */
	width: 300px;
	min-height: 500px;
	background: #fff;
	box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	transition: 0.5s;
}
.card:hover {
	box-shadow: 0 30px 70px rgba(0, 0, 0, 0.2);
}
.card .box {
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
	text-align: center;
	padding: 20px;
	box-sizing: border-box;
	width: 100%;
}
.card .box .img {
	width: 80px;
	height: 80px;
	margin: 0 auto;
	border-radius: 0%;
	overflow: hidden;
}
.card .box .img img {
	width: 100%;
	height: 100%;
}
.card .box h2 {
	font-size: 20px;
	color: #262626;
	margin: 20px auto;
}
.card .box h2 span {
	font-size: 14px;
	background: #68bf78;
	color: #fff;
	display: inline-block;
	padding: 4px 10px;
	border-radius: 15px;
}
.card .box p {
	color: #262626;
}
.card .box span {
	display: inline-flex;
}
.card .box ul {
	margin: 0;
	padding: 0;
}
.card .box ul li {
	list-style: none;
	float: left;
}
.card .box ul li a {
	display: block;
	color: #aaa;
	margin: 0 10px;
	font-size: 20px;
	transition: 0.5s;
	text-align: center;
}
.card .box ul li:hover a {
	color: #e91e63;
	transform: rotateY(360deg);
}
</style>
