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
    },
    orderBy: 'name'
  },
  getters: {
    // Return one beer from state by ID
    getBeerById(state) {
      return (id) => {
        return state.beers.find(b => b.id === id)
      }
    },
    // Return an ordered array of beers
    getBeers(state) {
      return state.beers.sort((a, b) => (a[state.orderBy] > b[state.orderBy]) ? 1 : -1)
    }
  },
  mutations: {
    //Save beers in state
    setBeers (state, beers) {
      state.beers = beers
    },
    //Merge one beer into the array
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
    },
    //Save sorting option
    setOrderBy (state, orderBy) {
      state.orderBy = orderBy
    }
  },
  actions: {
    // Fetch beers with store params
    async fetchBeers ({state, commit}) {
      const parameters = Object.entries(state.beersparams)
      const response = await beerApi(parameters)
      commit('setBeers', response)
    },
    // Fetch one beer if needed
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
