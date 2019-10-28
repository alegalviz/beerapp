import Vue from 'vue'
import Vuex from 'vuex'
import beerApi from '../services/punkapi.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: [],
    beersparams: {
      abv_gt: null,
      abv_lt: null,
      ibu_gt: null,
      ibu_lt: null,
      ebc_gt: null,
      ebc_lt: null,
      beer_name: null,
      yeast: null,
      brewed_before: null,
      brewed_after: null,
      hops: null,
      malt: null,
      food: null,
      ids: null
    },
    pagination: {
      page: 1,
      per_page: 30
    }
  },
  getters: {
    getBeerById(state) {
      return (id) => {
        return state.beers.find(b => b.id === id)
      }
    }
  },
  mutations: {
    //Save beers in state
    setBeers (state, beers) {
      state.beers = beers
    },
    mergeBeer (state, beer) {
      state.beers.concat(beer)
    },
    //Merge pagination options
    setPagination (state, pagination) {
      state.pagination = Object.assign({}, state.pagination, pagination)
    },
    //Merge beer params options
    setBeersParams(state, beersparams) {
      state.beersparams = Object.assign({}, state.beersparams, beersparams)
    }
  },
  actions: {
    async fetchBeers ({state, commit}) {
      const parameters = Object.entries(state.beersparams)
      const response = await beerApi(parameters)
      commit('setBeers', response)
    },
    async fetchBeer({
      commit
    }, beerId) {
      const response = await beerApi([['ids', beerId]])
      commit('mergeBeer', response)
      return response[0]
    }
  },
  modules: {
  }
})
