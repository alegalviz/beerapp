<template>
  <div class="beer-detail content" v-if="currentBeer">
    <img class="beer-image" :src="currentBeer.image_url" />
    <h1 class="name ui header">
      {{ currentBeer.name }}
      <div class="meta sub header">
        <span class="date">{{ currentBeer.first_brewed }}</span> | <span class="volume">{{ currentBeer.volume ? currentBeer.volume.value : '' }} and {{ currentBeer.boil_volume ? currentBeer.boil_volume.value : '' }} {{ currentBeer.volume ? currentBeer.volume.unit : '' }}</span>
      </div>
    </h1>
    
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
        <div class="ebc ui segment">
          <span title="European Brewery Convention">EBC</span> <span :style="`color: ${colored(currentBeer.ebc)};`">{{currentBeer.ebc}}</span>
        </div>
        <div class="srm ui segment">
          <span title="Standard Reference Method">SRM</span> <span :style="`color: ${colored(currentBeer.srm)};`">{{currentBeer.srm}}</span>
        </div>
      </div>
      <h4 class="ui horizontal divider header">
        <i class="food icon"></i>
        Meals suggested
      </h4>
      <div class="ui list">
        <div class="item" v-for="food in currentBeer.food_pairing" :key="food">
          <i class="ui spoon icon"></i>
          <div class="content">
            {{ food }}
          </div>
        </div>
      </div>
      <h4 class="ui horizontal divider header">
        <i class="beer icon"></i>
        Ingredients
      </h4>
      <div class="ui basic segment">
        <ul class="ui bulleted list" v-if="currentBeer.ingredients">
          <li class="">
            <strong>Malt</strong>
            <ul class="ui list">
              <li class="" v-for="ing in currentBeer.ingredients.malt" :key="ing.name + Math.random()">
                {{ ing.name }}: {{ing.amount ? ing.amount.value : ''}} {{ing.amount ? ing.amount.unit : ''}}
              </li>
            </ul>
          </li>
          <li class="">
            <strong>Hops</strong>
            <ul class="ui list">
              <li class="" v-for="ingre in currentBeer.ingredients.hops" :key="ingre.name + Math.random()">
                {{ ingre.name }}: {{ingre.amount ? ingre.amount.value : ''}} {{ingre.amount ? ingre.amount.unit : ''}}
              </li>
            </ul>
          </li>
          <li class="">
            <strong>{{ currentBeer.ingredients.yeast }}</strong>
          </li>
        </ul>
      </div>
      <h4 class="ui horizontal divider header">
        <i class="idea icon"></i>
        Brewer tips
      </h4>
      <div class="ui basic segment">
        {{currentBeer.brewers_tips}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { colored, capitalize } from '@/utils'

export default {
  name: "BeerDetail",
  data () {
    return {
      currentBeerId: null,
      currentBeer: {},
      colored: colored,
      capitalize: capitalize
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
  padding: 0 30px 30px 30px;
  min-height: 100vh;
  overflow-y: hidden;
  .name {
    .meta {
      font-size: 0.8rem !important;
    }
  }
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
  .item>i.icon {
    float: left !important;
  }
}
</style>