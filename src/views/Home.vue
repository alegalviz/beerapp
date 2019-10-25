<template>
  <div class="home">
    <div class="main">
      <sui-sidebar-pushable>
        <!-- Sidebar Menu -->
        <sui-sidebar
          :visible="sidebarVisible"
          animation="push"
          class="ui vertical wide sidebar menu"
        >
          <a class="active item">Beers!</a>
          <a class="item">Log out</a>
        </sui-sidebar>

        <sui-sidebar-pusher :dimmed="sidebarVisible" class @click="sidebarVisible = false">
          <div class="ui fixed text">
            <div class="ui large secondary menu">
              <a class="toc item" @click.stop="toggleSidebar()">
                <i class="sidebar icon"></i>
              </a>
            </div>
          </div>
          <Beers :beers="currentBeers" />
          <footer>
            <div class="ui container">
              <p>alegalviz - 2019</p>
            </div>
          </footer>
        </sui-sidebar-pusher>
      </sui-sidebar-pushable>
    </div>
  </div>
</template>

<script>
import Beers from "@/components/Beers.vue";
import beersMock from "../../tests/unit/mocks/beers.mock";

export default {
  name: "home",
  components: {
    Beers
  },
  data() {
    return {
      sidebarVisible: false
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
    }
  }
};
</script>
<style scoped lang="scss">
.pusher {
  min-height: 100vh;
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
</style>