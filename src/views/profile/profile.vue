<template>
  <div class="container-fluid">
      <div class="row">
          <div class="col-md-4">
              <div class="card user-card">
                  <div class="card-header">
                      <h5>Profile</h5>
                  </div>
                  <div class="card-block">
                      <h6 class="f-w-600 m-t-25 m-b-10">{{userData.name}}</h6>
                      <div class="user-image">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="img-radius" alt="User-Profile-Image">
                      </div>
                      <h6 class="f-w-600 m-t-25 m-b-10">email: {{userData.email}}</h6>

                      <hr>
                      <p class="text-muted m-t-15">User Accuracy: {{userAccuracy}}</p>
                      <p class="text-muted m-t-15">Game Played: {{gamesHistory.length}}</p>
                      <hr>
                  </div>
                  <a class="btn btn-primary mx-auto" @click.prevent="goToShowHistory">Show game history</a>
              </div>
          </div>
          <div class="col-md-8">
            <div>
              <a class="btn btn-white" @click.prevent='goToLeaderboard'>Leaderboard</a>
              <a class="btn btn-white ml-4" @click.prevent='goToMostPlayed'>Most Played</a>
            </div>
            <router-view/>
          </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProfilePage',
  components: {
  },
  data () {
    return {
      userData: '',
      gamesHistory: [],
      userAccuracy: 0,
      data: [{
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: 'bar'
      }],
      layout: {
        title: 'My graph'
      }
    }
  },
  methods: {
    goToLeaderboard () {
      this.$router.push('/profile/user/leaderboard')
    },
    goToMostPlayed () {
      this.$router.push('/profile/user/mostPlayed')
    },
    goToShowHistory () {
      this.$router.push('/profile/user/userHistory')
    }
  },
  created () {
    this.$store.dispatch('fetchProfile')
      .then((data) => {
        this.userData = data.data
      })
      .catch((err) => {
        console.log(err)
      })
    this.$store.dispatch('fetchUserGameData')
      .then((data) => {
        this.gamesHistory = data.data
        let accuracy = 0
        for (let i = 0; i < this.gamesHistory.length; i++) {
          if (typeof this.gamesHistory[i] === 'number') {
            accuracy += this.gamesHistory[i]
          }
        }
        this.userAccuracy = Math.round(accuracy / this.gamesHistory.length)
      })
      .catch((err) => {
        console.log(err)
      })
  }

}
</script>

<style>
.card.user-card {
    border-top: none;
    -webkit-box-shadow: 0 0 1px 2px rgba(0,0,0,0.05), 0 -2px 1px -2px rgba(0,0,0,0.04), 0 0 0 -1px rgba(0,0,0,0.05);
    box-shadow: 0 0 1px 2px rgba(0,0,0,0.05), 0 -2px 1px -2px rgba(0,0,0,0.04), 0 0 0 -1px rgba(0,0,0,0.05);
    -webkit-transition: all 150ms linear;
    transition: all 150ms linear;
}

.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
    box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
    border: none;
    margin-bottom: 30px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.card .card-header {
    background-color: transparent;
    border-bottom: none;
    padding: 25px;
}

.card .card-header h5 {
    margin-bottom: 0;
    color: #222;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    margin-right: 10px;
    line-height: 1.4;
}

.card .card-header+.card-block, .card .card-header+.card-block-big {
    padding-top: 0;
}

.user-card .card-block {
    text-align: center;
}

.card .card-block {
    padding: 25px;
}

.user-card .card-block .user-image {
    position: relative;
    margin: 0 auto;
    display: inline-block;
    padding: 5px;
    width: 110px;
    height: 110px;
}

.user-card .card-block .user-image img {
    z-index: 20;
    position: absolute;
    top: 5px;
    left: 5px;
        width: 100px;
    height: 100px;
}

.img-radius {
    border-radius: 50%;
}

.f-w-600 {
    font-weight: 600;
}

.m-b-10 {
    margin-bottom: 10px;
}

.m-t-25 {
    margin-top: 25px;
}

.m-t-15 {
    margin-top: 15px;
}

.card .card-block p {
    line-height: 1.4;
}

.text-muted {
    color: #919aa3!important;
}

.user-card .card-block .activity-leval li.active {
    background-color: #2ed8b6;
}

.user-card .card-block .activity-leval li {
    display: inline-block;
    width: 15%;
    height: 4px;
    margin: 0 3px;
    background-color: #ccc;
}

.user-card .card-block .counter-block {
    color: #fff;
}

.bg-c-blue {
    background: linear-gradient(45deg,#4099ff,#73b4ff);
}

.bg-c-green {
    background: linear-gradient(45deg,#2ed8b6,#59e0c5);
}

.bg-c-yellow {
    background: linear-gradient(45deg,#FFB64D,#ffcb80);
}

.bg-c-pink {
    background: linear-gradient(45deg,#FF5370,#ff869a);
}

.m-t-10 {
    margin-top: 10px;
}

.p-20 {
    padding: 20px;
}

.user-card .card-block .user-social-link i {
    font-size: 30px;
}

.text-facebook {
    color: #3B5997;
}

.text-twitter {
    color: #42C0FB;
}

.text-dribbble {
    color: #EC4A89;
}

.user-card .card-block .user-image:before {
    bottom: 0;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
}

.user-card .card-block .user-image:after, .user-card .card-block .user-image:before {
    content: "";
    width: 100%;
    height: 48%;
    border: 2px solid #4099ff;
    position: absolute;
    left: 0;
    z-index: 10;
}

.user-card .card-block .user-image:after {
    top: 0;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
}

.user-card .card-block .user-image:after, .user-card .card-block .user-image:before {
    content: "";
    width: 100%;
    height: 48%;
    border: 2px solid #4099ff;
    position: absolute;
    left: 0;
    z-index: 10;
}
</style>
