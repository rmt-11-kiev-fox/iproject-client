<template>
  <div class="card-container">
    <div class="floating-icon">
      <div class="status" :class="!counting && 'red-status'">
        <vue-countdown
          :time="timeFormatted * 1000"
          v-slot="{ hours, minutes, seconds }"
          v-if="counting"
          @end="onCountdownEnd"
        >
          Remaining：{{ hours }} : {{ minutes }} : {{ seconds }}
        </vue-countdown>
        <div class="end" v-if="!counting">Ended</div>
      </div>
      <i class="fas fa-star favorite-icon"></i>
    </div>
    <div class="card-container__left">
      <img :src="data.image" />
    </div>
    <div class="card-container__middle">
      <!-- <div class="text">current price : $5000</div> -->
      <div class="title">{{ data.name }}</div>
      <div class="text">{{ data.category }}</div>
      <div class="text highlight">Last Offer : Rp {{ data.currentBid }}</div>

      <!-- <div class="bar">
          <div class="percentage" />
        </div> -->

      <!-- <div class="flex">
        <img
          class="image"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABZVBMVEX19fX4+fv/ymTiamzTXmT/////uEzo4OteElz39/fqiInxpkBdDVtXAFaQc47s7OxfGlrp6elMAF3/zWT/vUvJlVH+y2j28/ZSAE//3WVcIlpJAEhFAF3u6u64p7ltNl2pl6niumOiVHL/0mRVA1rWr2GthF7Iucfyjo2BW4H/12SXe5aWal/gYmTsqKnqxGJBAEDVoE77sT1GAFXpgoPwuLhzR3PhXF/c1N9RClZQAF9ZAF6RV1T3rD76vVhOAFbiqk380JN1LmSiW3WpmKmldImgiZ1qNmj45+d2S3XyzM7bf4foeXmGPmjFtMTuwcG+aXnmkI+ZgpfhUVXIi5bSsLrYcXjAVWRaK1dCAEqJNF86ADWQdI9lG1jGb3mzYXaYPV2galW0e0/dmUP/yUZ6PlnMikirSWKRO16HS1epblB9QVfwoDqbXVLBgkuVWVTmrmOlemG9lmWEUl+GWl7WpFLRrISnrJLuAAAO1UlEQVR4nO2di3fTRhaHZTuKNbEdWXZqCT9CIIbUDmm8NgU/iFNYNmlalt2lu5uWVyGEUGhKu7Ddv3/vHcmJJI+MJdnXbo5+OQfCkYaZb+6d94xGkiJFihQpUqRIkSJFihQp0ggx+CGND0QdIS0iU1XK6ABOU2mzVJVUwhghJo1plDZkDAkJrWgiEmappqmaRBchuCjERpij3IASYXySCi6q0jkp5qhq/kIUn6qSuijaz4qQJFKwH1qQymWgTYIiIVG6KLcfZaXGDch/I4tQ5ZUaWXwaAFK2vRpkJ2FLyLCZ1wj7a+Cg2NIT1qJQ7rHQk0WJhFAQw0Q4fkisZKAfo6lSGCf1FxR7FuHi8xUjd1GVZylJfKYBQ5dCPza0+mlUOYotLw6ZqIoEWBBclCYuU9Dw0o5fID9J46PsppnSSCPlI95wPRnfiYWalDRCqNKIR/XhTBggKJqQGpE4MHlBjBQpUqRIkSJFihQp0ijNZEGadDUTJ1hIGYnnc/haUcgpR5/x8eUiwgkP1ZrpJItQwzhJywUuuBO66dliEZnMckgYIe0eBpTfupQxedJi+hxNujC5srG3PEk9Xd5ry/KsuQZicrvWKGUmrVJpLzYfRmR6rZRRpqC0kU3OgxlZpcj50lWnjEzGEChTFQueOF7LpPH/LLVnb0VW6SBgdffeVYf+fP/+mkD3/3JVLPeLe/voGGmjMnNEto8J2f3xc5e+8Kghv3S/aOrm8JvtfUNRMrVZ+6m8B8moZpc+X3Lq5pdyTCT5y5tLIj34euh9WT6AzGvM2E9ZpQQWzLr5gPAbf4Si92XdSCuZzdkaUV4DE7a+HSZ88LUQ0JtQZHN0kLQxUxsyuZhW0n8dBlx6oPsjXPpCRJhsKIqxMUNExtolNKGoXImd1JtwSRRAvpWx1zUzGJPLm9hSCEwoTvAowptCwodQCEpJNoiPFBCXk1kMTFi9KiIUOd1oQnHBhQiMPW5EjXIOALITpwAktoFOaqXwQcKmLU/CL7YSQt3+Rvj6cgaqahlGGVqMdIWe4fiRqfIB1DP30IQP3On9mxhwBKGwAZWxoEPXDbKUflM6RFmBqm73758v3Uy4k33bo7HwJvSwOlbWmWVZ0+iG5GywKR3qmfvYnwETDqf3O4/GwpswIaxqYrzBbeh8/61/wCCbOZjpoXzvn7yfVqrQGIp8zqMYjiDcEgeplNKKsaoGc9FgYcwdzbh9sw1O2nouAkwk/BPeFptdrkGTeEsO5qKB3Bq3M2v8vJTVGN4U2eMf/gm/ExddeQPysZGknPZTJXN7KmMwSIXGUOhxXo3FKBsKm4uYzLLQJD4i634z9WwyXLYaQ2FqvRqLUeVQnCuq/AibxBgVIM4SW9tvsYBAY+huCU1Cr8ZiFKHQs1Wz+13aoDEiPzdh7WjmI0NoDMUeF4BQWDvh8AUHwtD9nn5BZBwQ211OKK/C2K0lrGc8a/7RhN8NB+JlHmNSjMrUAc2dlPwwETehNTIUOmnigSw5637d+lOPjSDU+Qs2afDvSkzVG9Akrk3fTQdLima9bY4Mn3+7INRzPekh/Z8LW+IwC7f/1XYGa8MPD7NsUEy68S3+3H5mPQONYaez9G9RUg9bP5Q8ACvf/9A6FAMmHv/w5KkdsT1ArGCTaKxOmxDrF9sKn4z1zNUlYVLvdZTSWkUIuAppzSbEiC1FeeIATFo2TMaMDhBO201xx7atb8gJnwtNmHgG6dkUE2I/uuNN2GgLnBQIsdF/OPWC6Dx9JvNiKCbsQHpuCUsiliilJQY8BMLSasWBOAjW4IPEaRNKzD6NIGfTyu6PHkmFLH8itKH+PRIKC+LWY8yYmiNjBojYxS9RTO/bJ4NweqHzWFQtJjCpLmskbUmFYCI3Tezi8o6whqrgtGmRemI4hs1wS1iiWnxprCRwU+6kSlbkpokXnNBYFgWDEkE/9c07bZ0Xw0ZMZDuc0Hg6nFZuQkVsezNflMbGkO31NT5XQ9X3PiPEjrfAGonHYItqNQ1pXXUjVrAU9gCj9WbI+FlcoasiYtuFWMF8yRzQr15ApyYNbf5CwgXYwpWar8qY1rWY0xa3ALD7MqekobJxBEssoOG7L49yYPvShiNnKsmiMaMVKHkTC1Xn0OZxiUPuouVXK0ccsZY8T6zeRgtWi8f8UeuFDXHrzW4Hl+hWVl6DhY3GXuXcjPpGCfvdT2eyABXDtVGlde8wsbUF3emtxOEzXpjKJzv95i/IYTQ227peqVR0vb3cgJSmc6l4820XfHg3+2YhsbUAwRbeZFt8kXxnsd+811OynVJpLxnjwWIbtQbAZ/ZnsmWBMZ0v4HdarWePf/rpcbbVQgNWyyfNVCHVfFfm9U2jVNt89KhWQj4l3X21k08138KjrLILwV5gMDSg0s3upPr90+brbhr8AIM9gmANHixT1KmrGVM6i9VKuJ+gA+URxLcrdO+lIKn5VKp5kuvy2hE3IJhbNXJFeJYHjHfltFmpWqGUdPltM3Uaj0Owl+WqWRdjsA7frXAwu00nTF7NGmYt3+GVYbd61ExBUgv9VGpn5065mz7fOtLNvWsCPMd4ddniyHL/LBfB7qlUPr+Iz16Xe7ZgBnS5Z7lGKuvYl1Z6oG4ud/l9EwGBAowIiU29zJa7/Fm3/OzdDlLE43Gkb5783M2Zj8rdn08AHU0Yj5/is1e/KmawXq61v6rL+gwBoR+HLX/vlzt3fjk62cGEoi0wrfy3ZvPV+3e/3vn13ftXyM7hTXp49+SIB3tlBjvtQzBwYf5sEOzkN1me9eY2TlhugnZMPNMWYKlT8587O+fPOMWAnpM0rUwZ5Et+0Rnst5FVDMk0sUmYOhc3U3xgDocGgIA49CxVsIItOh6NJMTZ6TBncMfLIBfhaSo+oCjEXQzngEOIp/1CIV4Q5MwoQhbukzfjfjfDQXia6hfiNtntYWOPm9WN7REPNrCi7dnpSBuqoU77+yU8PQUatIRdPLEmZd/BZzGe8lCLYFsbYTxfiPcXeaDF/t2R5TDU99/G/RqfSbjO3RLlwsjnz1I9pLzt78KZl1rBMGC+UL8b824rBgu105aKEzbrVtETcIwrUdD6h93sxoi8DlfTjCt57UljtR6cbJS2y9gn9Y6baFFRjsXklakA5q+Uodc2yx6NKSbL7NiVtnr9klD1vN0bC+uCN+pOQiUzc0LWPqgljx2lqL79n4+XRXp945oNYL3+Yfi1j9e31+eN0MhkOo5yWL9R7lXTImV65Y/1QRW6fqWY6w29Ut3NXVufK0KztbC1dYVL/82N2H/fyw4Qt3erSlrwRrp8xWpb5oNQOm8PLdN8KFvDXoGAqHqjblm6x0d/7q38EPZyff5saCO8hMPX0uaqSGtZeFbeNglzOP8y9ErNOHtjrghtXgptmGJseGzUT4IVcx94fmzncA5/+BV841p+jgnz13K4N0QsPo3cu35OWBle5y/+IQiLnvsUIsKIcBbSjUyvVb/IhHL74JZ2fJEJec97pXCRCWVdZysX2YbyqmE8vMjlkOmldPpC1zTufumcEU7gayLzTTiJeRzvFh960e7kS6SE/CvN4c/ZeBLqywcbbkR1iHD4aOyEy2F4RC9CuWZkGkkXwJANh49Y4G6yidlQ0gKeRBmL0ODbzx0WVIcIh8eRuDG3fGUChAxdVJ2il8oZN6EqOwgvgTsqxvKmU8s40dGZxCwG459LmcCc8diEEJ/DS9c/4ITV0McwcEPD9fXQNmR81/1EvkM9itA4J8Qt9w4vLcQvfRTOyaVzry/FHTYMcgBNw6M9kzl1Oi4h5GfM0R7yedVutedSt3zjrIM0IAxwKk/VJnY7wniEWgxXa12E8fr29Rtufdi29QAtL/X/jW0OaB7OoiFUwUtjktuGWBjrbq3bpu2slZkAgPip9EktLY5DiNbTWExAOFqc0H85ZOzs6NL0CGV7ewhlHiDV4IT+0moer+Pfgp/IDR6eNjzIpBtt2XRRfn4pGCGvaXzdGMLP0Yf9NNonCcGGlYPiqszbQYSUrD7ZtAm5i0pS2CtKHP+jV89bNscW2C7Zep0+Cbvopb6Sg/dpTPYDE5+YL0UDSsEJcQ3EDyF+mXCS9vs0ocpdNChhwS8h49fLhAIcDvspG0p2E/ojLBTMutRX+iYx5vUk5DuG3LMYDsAzwsJ48k0oSeGuzhKFPSPsL65w/e6ap1HdhN2jFevV0Vpc7PsfW7DJ3183IFwc6E/lUTNR7UYr118cV1/N0WziWaJWRhJCM/k/tM4fjzA/LmFMvtscG3A+CKUKbi34amzCmH/CWX9WMFZMK93rx9MgXPmM11ozBpTkpzBO6p4VrkkSHl+uzsF3E82v1GSK/WOrkv8dCUd8O/fuOC0F6vj4LU44Tv+A86ekYxunVHM3PjN11FWU7MMNT/3vs/H0/k63h1k3cyfF2hTnOJVezlSXH1Xy1m5uPCGfgkPMWfOBWNIwRuzVC6EM1UdbPiWmLzeMjHC/ZQhljEatMh+AuFkhuVYrZieq/eXVykwPrbk0+e+Vg2ivg5iNpgjIL/AlvVAjzPGXQFIpLwqXBncxUEYohZ3w8CcW7pRWkAjDnZoKECHRIabzGDXagsjIvZRnKnFNQxdZpEiRIkWKFClSpAsl6gsnqGMjHpJTX48o0V9XKNHe4skGm/+o4iMekZsWJBzQmTt+KZ1Gw10ddFnKXZTsrln83rXKXZTkQg3zXE/Qu3uDRqgFddFgEYZw0WBepvHbEehcVOUZSlfo+aU9lE0Tn30nbZg0Db/sTVjJaNaGX7IImXUHC5FUaXCfBomYeYMHYTPBKxi6zgzj11sQlgqmadj0Ek4Wa7hFlbBaU80vB9LlaLi9m/7jI16Q4i46qbNEY0VoFgnCPMX8pByGqhIjrUb59mLSll4zs5RO3EspyyHD84O0K4q0fSfJcekLVZTE8ZEu7FtxXvD4IkWKFClSpEiRIl0ITfaU+NQj9B+YqaGWh3xHyMJdKM985w8/CB98UB7AHio/fR84Qt95ijNjwWc2g52tYOHut/BLqPEN94Hj809IvnOalwvq+GgnVvzbPWSE0SxApEh/IP0fW+6Dm+qU+kYAAAAASUVORK5CYII="
        />
        <div class="text">Kevin Store</div>
      </div> -->
    </div>

    <div class="card-container__live-bid" @click="liveBiddingHandler">
      <div class="text">Live Bidding</div>
      <i class="fas fa-play-circle icon"></i>
    </div>
  </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown'
export default {
  props: ['data'],
  name: 'Card',
  components: {
    VueCountdown
  },
  data() {
    return {
      counting: true
    }
  },
  computed: {
    timeFormatted() {
      const seconds = new Date()
      const dataInSeconds = new Date(this.data.createdAt)
      if (this.data.dueDate - (seconds - dataInSeconds) / 1000 < 0) {
        return 0
      } else {
        return this.data.dueDate - (seconds - dataInSeconds) / 1000
      }
    }
  },
  methods: {
    onCountdownEnd() {
      this.counting = false
    },
    liveBiddingHandler() {
      this.$router.push(`/live-bid/${this.data.id}`)
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
