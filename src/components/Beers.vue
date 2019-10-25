<template>
  <div class="ui four column stackable grid container">
    <div
      class="column stretched"
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
<style lang="scss" scoped>

</style>