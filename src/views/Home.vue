<template>
  <div class="home">
    <div class="main">
      <sui-sidebar-pushable>
        <!-- Sidebar Menu -->
        <Sidebar
          :toggle-sidebar="toggleSidebar"
          :sidebarVisible="sidebarVisible"
          from="left"
        >
          <FilterOptions></FilterOptions>
        </Sidebar>

        <sui-sidebar-pusher :dimmed="sidebarVisible || beerVisible" class @click="closeSidebars()">
          <div class="ui top menu attached">
            <a class="toc item" @click.stop="toggleSidebar()">
              <i class="filter icon"></i>Filter options
            </a>
          </div>
          <div class="main-content">
            <Beers :beers="currentBeers"/>
          </div>
          <footer>
            <div class="ui container">
              <p>alegalviz - 2019</p>
            </div>
          </footer>
        </sui-sidebar-pusher>

        <Sidebar
          :toggle-sidebar="toggleBeerSidebar"
          :sidebarVisible="beerVisible"
          width="very wide"
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
import Sidebar from "@/views/Sidebar.vue"
import beersMock from "../../tests/unit/mocks/beers.mock";

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
      beerVisible: false
    };
  },
  computed: {
    currentBeers() {
      return beersMock;
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    toggleBeerSidebar() {
      this.beerVisible = !this.beerVisible;
    },
    openABeer() {
      console.log('open')
      this.beerVisible = true
    },
    closeSidebars() {
      this.sidebarVisible = false
      this.beerVisible = false
      this.$router.push({name: 'home'})
    }
  },
  watch: {
    $route(to, from) {
      console.log(to.name, from)
      if (to.name === 'beer') {
        this.openABeer()
      }
    },
    beerVisible: function (newValue) {
      console.log(newValue)
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
</style>