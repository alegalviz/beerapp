<template>
  <div class="filter-options ui form">
    <h4 class="ui horizontal divider header">
      <i class="filter icon"></i>
      Filters
    </h4>
    <div class="filters">
      <h5 class="sub header">Filter by ABV</h5>
      <div class="segment">
        <vue-slider v-model="filterABV" :tooltipStyle="background" :processStyle="background" :max="maxABV" :marks="marksABV" :enable-cross="false" :tooltip="'focus'" />
      </div>
    </div>
    <div class="filters">
      <h5 class="sub header">Filter by IBU</h5>
      <div class="segment">
        <vue-slider v-model="filterIBU" :tooltipStyle="background" :processStyle="background" :max="maxIBU" :marks="marksIBU" :enable-cross="false" :tooltip="'focus'" />
      </div>
    </div>
    <div class="filters">
      <h5 class="sub header">Filter by EBC</h5>
      <div class="segment">
        <vue-slider v-model="filterEBC" :tooltipStyle="background" :processStyle="background" :max="maxEBC" :marks="marksEBC" :enable-cross="false" :tooltip="'focus'" />
      </div>
    </div>
    <div class="filters">
      <div class="ui field beer-name">
        <label>Beer name</label>
        <input type="text" v-model="beerName" name="beer-name" placeholder="Beer name">
      </div>
    </div>
    <div class="filters">
      <div class="ui field">
        <label>Yeast name</label>
        <input type="text" v-model="yeastName" name="yeast-name" placeholder="Yeast name">
      </div>
    </div>
    <div class="filters segment">
      <button class="ui brown button right floated" @click="getBeersWithParams" type="submit">Apply filters</button>
    </div>
  </div>
</template>
<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'FilterOptions',
  components: {
    VueSlider
  },
  props: {
    onSubmit: {
      type: Function,
      required: false,
      default: () => {}
    },
    toggleLoading: {
      type: Function,
      required: false,
      default: () => {}
    }
  },
  data () {
    return {
      background: {'background': 'rgb(193, 122, 80)', 'border-color': 'rgb(193, 122, 80)'},
      maxABV: 40,
      maxIBU: 120,
      maxEBC: 70,
      filterABV: [0, 40],
      filterIBU: [0, 120],
      filterEBC: [0, 70],
      marksABV: [0, 10, 20, 30, 40],
      marksIBU: [0, 30, 60, 90, 120],
      marksEBC: [0, 10, 30, 70],
      beerName: '',
      yeastName: ''
    }
  },
  methods: {
    ...mapMutations([
      'setBeersParams'
    ]),
    ...mapActions([
      'fetchBeers'
    ]),
    async getBeersWithParams() {
      const params = {};
      [params.abv_gt, params.abv_lt] = this.filterABV;
      [params.ibu_gt, params.ibu_lt] = this.filterIBU;
      [params.ebc_gt, params.ebc_lt] = this.filterEBC;
      params.beer_name = this.beerName
      params.yeast = this.yeastName
      this.setBeersParams(params)
      this.toggleLoading()
      this.onSubmit()
      await this.fetchBeers()
      this.toggleLoading()
    }
  }
}
</script>
<style lang="scss" scoped>
.filter-options {
  .filters {
    padding: 10px 30px;
    margin-bottom: 15px;
    .beer-name{
      margin-top: 15px;
    }
    .input {
      width: 100%;
    }
  }
}
</style>