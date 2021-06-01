<template>
  <div>
    <table>
      <tbody>
        <tr>
          <td>First Name</td>
          <td>------</td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>-------</td>
        </tr>
        <tr>
          <td>Email Address</td>
          <td>-------</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>-------</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>-------</td>
        </tr>
      </tbody>
    </table>
    <div>
      <router-link to="/profile/edit"
        ><a href="" class="btn">Edit Profile</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileData",
};
</script>

<style>
</style>