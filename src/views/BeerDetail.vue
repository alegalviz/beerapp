<template>
  <div class="beer-detail">
    <img class="beer-image" :src="currentBeer.image_url" />
    <h1 class="name">{{ currentBeer.name }}</h1>
    <div class="beer-body">
      <div class="ui raised segment">
        {{currentBeer.description}}
      </div>
      <div class="ui horizontal segments">
        <div class="abv ui segment">
          <span title="Alcohol By Volume">ABV</span> <span :style="`color: ${colored(currentBeer.abv * 10)};`">{{currentBeer.abv}}</span>
        </div>
        <div class="ibu ui segment">
          <span title="International Bitterness Units">IBU</span> <span :style="`color: ${colored(currentBeer.ibu)};`">{{currentBeer.ibu}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { colored } from '@/utils'

export default {
  name: "BeerDetail",
  data () {
    return {
      currentBeerId: null,
      currentBeer: {},
      colored: colored
    }
  },
  computed: {
    ...mapGetters([
      'getBeerById'
    ])
  },
  methods: {
    ...mapActions(['fetchBeer'])
  },
  async mounted () {
    this.currentBeerId = this.$route.params.beerId
    if (this.currentBeerId) {
      this.currentBeer = this.getBeerById(this.currentBeerId) || await this.fetchBeer(this.currentBeerId)
    }
  }
};
</script>
<style scoped lang="scss">
.beer-detail {
  padding: 15px 30px;
  min-height: 100vh;
  overflow-y: hidden;
  .beer-image {
    position: absolute;
    top: 44px;
    /* -webkit-transform: rotate(10deg); */
    /* transform: rotate(10deg); */
    transform: translateX(-70%);
    height: 100%;
    opacity: 0.1;
    z-index: -1;
    /* height: 200%; */
  }
}
</style>