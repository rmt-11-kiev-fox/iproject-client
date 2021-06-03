<template>
  <div class="item-center justify-center">
    <nav id="nav" class="font-sans flex flex-col items-center justify-center text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-5 bg-white shadow sm:items-baseline w-full">
        <div class="mb-2 sm:mb-0 flex flex-row">
          <div class="h-10 w-10 self-center mr-2">
            <img class="h-10 w-10 self-center" src="../assets/search--v2.png" />
          </div>
          <div>
            <a  href="/home" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">PopularSrch</a><br>
            <span class="text-xs text-grey-dark">Search 'bout popular happenings in Reddit & Twitter</span>
          </div>
        </div>
    </nav><br><br><br>

    <div class="mt-10 font-sans text-black flex items-center justify-center">
      <div class="border rounded overflow-hidden flex">
        <input v-model="query" type="text" id="input" class="px-4 py-2" placeholder="Search...">
        <button @click="search(query)" class="flex items-center justify-center px-4 border-l bg-teal-500 text-white active:bg-teal-600">
          <svg class="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
        </button>
        <button @click="listen" class="flex items-center justify-center px-4 border-l bg-lightBlue-500 text-white active:bg-lightBlue-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </button>
      </div>
    </div>
    
    <div class="mt-4">
      <div class="mt-2">
        <label class="inline-flex items-center">
          <input v-model="site" type="radio" class="form-radio" name="accountType" value="reddit">
          <span class="ml-2">Reddit</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input v-model="site" type="radio" class="form-radio" name="accountType" value="twitter">
          <span class="ml-2">Twitter</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'NavBar',
  data() {
    return { query: "", site: "", voiceInput: '' }
  },
  methods: {
    search(query) {
        if (this.site === "twitter") {
          this.$store.dispatch("getSearchTwitter", query);
        } else {
          this.$store.dispatch("getSearchReddit", query);
        }
    },
    listen() {

        // new speech recognition object
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
                    
        // This runs when the speech recognition service starts
        recognition.onstart = function() {
            console.log("We are listening. Try speaking into the microphone.");
        };

        recognition.onspeechend = function() {
            // when user is done speaking
            recognition.stop();
        }
                      
        // This runs when the speech recognition service returns result
        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
            var confidence = event.results[0][0].confidence;
            console.log(transcript)
            document.getElementById('input').value = transcript
            this.query = document.getElementById('input')
        };
                      
        // start recognition
        recognition.start();
        
    },
  },
  computed: {
    searchIVoice() {
      this.$store.dispatch("getSearchByVoice", voiceInput)
    }
  }
}
</script>

<style>
</style>
