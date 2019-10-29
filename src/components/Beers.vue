<template>
  <div class="ui four column stackable masonry grid container">
    <div
      class="column"
      v-for="beer of beers"
      :key="beer.id"
    >
      <Beer :beer="beer" class="ui segment" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Beer from '@/components/Beer.vue'

export default {
  name: 'Beers',
  components: {
    Beer
  },
  props: {
    beers: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
  .masonry.grid {
    display: block !important;
    column-count: 1;
    column-gap: 0;
  }

  @media only screen and (max-width: 768px) {
    .ui.toggle.checkbox input~label {
      padding-left: 10px;
      padding-top: 30px;
      padding-right: 10px;
    }
  }

  @media only screen and (min-width: 768px) {
    .masonry.grid {
      column-count: 2;
      column-gap: 0;
    }

    .ui.masonry.grid[class*="four column"] > .column {
      width: 100% !important;
    }
  }

  @media only screen and (min-width: 992px) {
    .masonry.grid {
      column-count: 4;
    }
  }
</style>