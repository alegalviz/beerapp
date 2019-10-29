<template>
  <div class="home">
    <div class="main ui">
      <div class="ui mini text loader" v-if="loading">Loading</div>
      <sui-sidebar-pushable>
        <!-- Sidebar Menu -->
        <Sidebar
          :toggle-sidebar="toggleSidebar"
          :sidebar-visible="sidebarVisible"
          from="left"
        >
          <FilterOptions 
            :toggle-loading="toggleLoading"
            :on-submit="toggleSidebar"
          />
        </Sidebar>

        <sui-sidebar-pusher :dimmed="sidebarVisible || beerVisible" class @click="closeSidebars()">
          <div class="ui menu container">
            <a class="toc item" @click.stop="toggleSidebar()">
              <i class="filter icon"></i><span class="hideMobile">Beer filter!</span>
            </a>
            <div class="right menu">
              <div class="hideMobile header item">Order by:</div>
                <div class="item">
                  <div class="ui toggle checkbox">
                    <input v-model="orderBy" value="name" type="radio" name="name" @click.stop="toogleCheckbox">
                    <label>Name</label>
                  </div>
                </div>
                <div class="item">
                  <div class="ui toggle checkbox">
                    <input v-model="orderBy" value="abv" type="radio" name="abv" @click.stop="toogleCheckbox">
                    <label>ABV</label>
                  </div>
                </div>
                <div class="item">
                  <div class="ui toggle checkbox">
                    <input v-model="orderBy" value="ibu" type="radio" name="ibu" @click.stop="toogleCheckbox">
                    <label>IBU</label>
                  </div>
                </div>
            </div>
          </div>
          <div class="main-content">
            <sui-dimmer :active="loading">
              <sui-loader :active="loading" content="Loading" size="large"/>
            </sui-dimmer>
            <Beers :beers="currentBeers"/>
          </div>
          <footer>
            <div class="ui container">
              <p>alegalviz - 2019</p>
            </div>
          </footer>
        </sui-sidebar-pusher>

        <Sidebar
          :toggle-sidebar="closeSidebars"
          :sidebarVisible="beerVisible"
          width="very wide beer-details"
          from="right"
        >
          <router-view />
        </Sidebar>
      </sui-sidebar-pushable>
    </div>
  </div>
</template>

<script>
import Beers from "@/components/Beers.vue";
import FilterOptions from "@/components/FilterOptions.vue";
import Sidebar from "@/components/Sidebar.vue"
// import beersMock from "../../tests/unit/mocks/beers.mock";
import { mapState, mapActions } from 'vuex'

export default {
  name: "home",
  components: {
    Beers,
    Sidebar,
    FilterOptions
  },
  data() {
    return {
      sidebarVisible: false,
      beerVisible: false,
      loading: false,
      orderBy: 'name'
    };
  },
  computed: {
    ...mapState({
      currentBeers: (state) => state.beers
    })
    // currentBeers() {
    //   return beersMock;
    // }
  },
  methods: {
    ...mapActions([
      'fetchBeers'
    ]),
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    toggleBeerSidebar() {
      this.beerVisible = !this.beerVisible;
    },
    toggleLoading () {
      this.loading = !this.loading
    },
    openABeer() {
      this.beerVisible = true
    },
    toogleCheckbox(e) {
      if (e.target.value === this.orderBy) {
        this.orderBy = ''
      }
    },
    closeSidebars() {
      this.sidebarVisible = false
      this.beerVisible = false
      if (this.$route.name === 'beer') { this.$router.push({name: 'home'}) }
    }
  },
  async mounted () {
    this.loading = true
    try {
      await this.fetchBeers()
      this.beerVisible = this.$route.name === 'beer'
    } finally {
      this.loading = false
    }
  },
  watch: {
    $route(to) {
      if (to.name === 'beer') {
        this.openABeer()
      }
    }
  }
};
</script>
<style scoped lang="scss">
.pusher {
  min-height: 100vh;
  padding-bottom: 100px;
}
.main-content {
  margin-top: 30px;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #f8f8f8;
  margin-top: 0;
  margin-bottom: 0;
}
/* fixed fix */
.pushable:not(body) {
  transform: none;
}

.pushable:not(body) > .ui.sidebar,
.pushable:not(body) > .fixed,
.pushable:not(body) > .pusher:after {
  position: fixed;
}

.ui.active.dimmer {
  position: fixed;
  max-height: 100vh;
}
@media only screen and (max-width: 768px) {
  .hideMobile {
    display: none !important;
  }
  .beer-details {
    max-width: 100% !important;
  }
}

</style>