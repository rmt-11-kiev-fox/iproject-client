<template>
	<div id="login">
		<div class="container vh-100 d-flex justify-content-center align-items-center vw-100">
			<div class="row vw-100 d-flex justify-content-center align-items-center">
				<div class="col-md-6">
					<LoginSvg />
				</div>
				<div class="col-md-6">
					<div class="row w-100 d-flex flex-column align-items-center justify-content-center">
						<img src="../assets/logo.png" class="align-self-center" width="100px" alt="" />
						<div class="mb-4 text-center">
							<h3>Sign In</h3>
							<p>and Be Stylish with MANIS.</p>
						</div>
						<div class="w-75 d-flex flex-column align-items-center justify-content-center">
							<form @submit.prevent="submitLogin">
								<div class="form-group first">
									<label for="email">E-mail</label>
									<input type="text" class="form-control" id="email" v-model="userData.email" required />
								</div>
								<div class="form-group last mb-4">
									<label for="password">Password</label>
									<input type="password" class="form-control" id="password" v-model="userData.password" required />
								</div>

								<router-link to="/register" class="routerlink">Didn't have an account yet? Register here</router-link>

								<input type="submit" value="Log In" class="btn btn-block btn-success mt-2" />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import LoginSvg from "@/components/svg/LoginSvg";
import Swal from "sweetalert2";

export default {
	data() {
		return {
			userData: { email: "", password: "" },
		};
	},
	components: {
		LoginSvg,
	},
	methods: {
		submitLogin() {
			this.$store
				.dispatch("login", this.userData)
				.then(({ data }) => {
					localStorage.setItem("manis_token", data.access_token);
					this.$store.commit("SET_AUTH", true);
					this.$router.push("/#started");
				})
				.catch((err) => {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: err.response.data.message,
					});
				});
		},
	},
};
</script>

<style scoped>
#login {
	background-image: url("../assets/bg-home.png");
	background-size: 100% 100%;
	background-repeat: no-repeat;
}
.routerlink {
	color: #68bf78;
}
</style>
