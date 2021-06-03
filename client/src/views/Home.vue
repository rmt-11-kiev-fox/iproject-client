<template>
<div>
  <div class="container">
    <Navigation/>
    <Location/>
    <div class="container my-5">
      <Playlist/>
    </div>
    <DataPlay/>
    <div>
      <section id="About">
        <details open>
          <summary>Ahmad Internaldo</summary>
          <div>
            <img src="https://scontent.fplm4-1.fna.fbcdn.net/v/t1.18169-9/11428_607296829283661_87001953_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=J2ErHT3Vf8UAX-F6bVw&_nc_ht=scontent.fplm4-1.fna&oh=b1688a25734aba35562400b4e5d0d0a1&oe=60DD7929" />
            <p>Born in Padang, 20 Juni 1994, Bipolar person so that have ability to adapt in every scope. <br> kindly has talent of music, but turn over to be and IT cause pandemic's impact of this Era</p>
            <ul>
              <li><pre>Instagram: @internaldo_</pre></li>
            </ul>
          </div>
        </details>
        <details>
          <summary>Skills</summary>
          <div>
            <ul>
              <li><pre>Backend                : Intermediate</pre></li>
              <li><pre>Frontend               : Beginner</pre></li>
              <li><pre>Telecomunication signal: Expert</pre></li>
              <li><pre>Music                  : Intermediate</pre></li>
            </ul>
          </div>
        </details>
        <details>
          <summary>Experience at Life</summary>
          <div>
            <ul>
              <li><pre>Consultant at Planning Regeneration (till now)</pre></li>
              <li><pre>IT Support Management System at PT.Astra Graphia IT(Backend: 2020-2021)</pre></li>
              <li><pre>bachelor degree at Institut Teknologi Telkom (2012-2019)</pre></li>
              <li><pre>Operational Manager at Miles Coffee (2019-2020)</pre></li>
              <li><pre>Consultant of Regeneration at Riverside Baseball-Softball Club(2016-2018)</pre></li>
              <li><pre>Coordinator of Regeneration at PERMALA (2014-2015)</pre></li>
              <li><pre>Coordinator of Internal Public Relationship at Riverside Baseball-Softball Club(2014-2015)</pre></li>
              <li><pre>Player of ITT CUP National Competition Softball as Leader Outfill (2013-2014)</pre></li>
              <li><pre>Chief at Young Mass Basis at BEM (2012-2013)</pre></li>
              <li><pre>Runner Up at Movie Competition in good day schoolicious (2011-2012)</pre></li>
              <li><pre>Silver Medal on International Bandung Choir Competition (2011-2012)</pre></li>
            </ul>
          </div>
        </details>
        <details>
          <summary>Experience at Application Operated</summary>
          <div>
            <ul>
              <li><pre>Bash Operation System      : Intermediate</pre></li>
              <li><pre>Control-M                  : Expert</pre></li>
              <li><pre>Robotic Process Automation : Intermediate</pre></li>
              <li><pre>Subex                      : Intermediate</pre></li>
              <li><pre>Splunk                     : Intermediate</pre></li>
              <li><pre>Pamela Client Security     : Intermediate</pre></li>
              <li><pre>Matlab                     : Beginner</pre></li>
            </ul>
          </div>
        </details>
      </section>
    </div>
  </div>
  <HFooter/>
</div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
import Navigation from '../components/Navigation.vue'
import Playlist from '@/components/Playlists'
import Location from '@/components/Location'
import DataPlay from '@/components/DataPlay'

export default {
  created () {
    this.$store.dispatch('fetchDataHome')
  },
  components: {
    Navigation,
    HFooter,
    Playlist,
    Location,
    DataPlay
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Karla|Space+Mono");

:root {
  --contentHeight: 30vh;
  --sectionWidth: 700px;
}

* {
  outline: 0;
  box-sizing: border-box;
}

body {
  background-color: #000;
}

section {
  max-width: var(--sectionWidth);
  margin: 40px auto;
  width: 97%;
  color: #fff;
}

summary {
  display: block;
  cursor: pointer;
  padding: 10px;
  font-family: "Space Mono", monospace;
  font-size: 22px;
  transition: .3s;
  border-bottom: 2px solid;
  user-select: none;
}

details > div {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 100%;
  user-select: none;
  padding: 0 20px;
  font-family: "Karla", sans-serif;
  line-height: 1.5;
}

details > div > img {
  align-self: flex-start;
  max-width: 100%;
  margin-top: 20px;
}

details > div > p {
  flex: 1;
}

details[open] > summary {
   color: red;
}

@media (min-width: 768px) {
  details[open] > div > p {
    opacity: 0;
    animation-name: showContent;
    animation-duration: 0.6s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    margin: 0;
    padding-left: 20px;
  }

  details[open] > div {
    animation-name: slideDown;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  details[open] > div > img {
    opacity: 0;
    height: 100%;
    margin: 0;
    animation-name: showImage;
    animation-duration: 0.3s;
    animation-delay: 0.15s;
    animation-fill-mode: forwards;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    height: 0;
    padding: 0;
  }

  to {
    opacity: 1;
    height: var(--contentHeight);
    padding: 20px;
  }
}

@keyframes showImage {
  from {
    opacity: 0;
    clip-path: inset(50% 0 50% 0);
    transform: scale(0.4);
  }

  to {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
}

@keyframes showContent {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
