<template>
  <div class="container w-75 my-5 bg-light rounded shadow" id="login-page">
        <div class="row py-2 d-flex align-items-center">
            <div class="col">
                <!-- <img src="../../assets/login-logo.svg" style="width: 100%" alt="" /> -->
            </div>
            <div class="col">
                <h1>Please Login first</h1>
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email"/>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                Dont have an account? <router-link  to="/register">Register Here</router-link > OR
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
