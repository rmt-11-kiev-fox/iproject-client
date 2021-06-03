<template>
<div class="container-fluid">
    <h4 class="text-danger pb-3">Coming Soon Movie</h4>
    <!-- <button @click="$refs.myVueperSlides[`${autoPlaying ? 'pause' : 'resume'}Autoplay`]();autoPlaying = !autoPlaying">
        {{ autoPlaying ? 'Pause' : 'Resume' }}
    </button>
    <button @click="pauseOnHover = !pauseOnHover">Pause on mouseover</button>
    <code>Currently {{ internalAutoPlaying ? 'playing' : 'paused' }}</code> -->

    <vueper-slides
    ref="myVueperSlides"
    :visible-slides="4"
    autoplay
    :pause-on-hover="pauseOnHover"
    @autoplay-pause="internalAutoPlaying = false"
    @autoplay-resume="internalAutoPlaying = true">
        <vueper-slide
            class="text-dark"
            v-for="(comingSoon, i) in comingSoons"
            :key="i"
            :image="comingSoon.img"
            :link="comingSoon.url"
            style="width:25%"/>
        <template v-slot:pause>
            <i class="icon pause_circle_outline"></i>
        </template>
    </vueper-slides>
</div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    name: 'Carousel',
    components: { VueperSlides, VueperSlide },
    data: () => ({
        pauseOnHover: true,
        autoPlaying: true,
        internalAutoPlaying: true,
        slides: [
            {
            id: 'slide-1',
            title: 'Slide <b style="font-size: 1.3em;color: yellow">#1</b>',
            content: 'Slide title can be HTML.<br>And so does the slide content, <span style="font-size: 1.2em;color: yellow">why not?</span>'
            }
        ]
    }),
    props: [ 'comingSoons' ]
}
</script>

<style>

</style>