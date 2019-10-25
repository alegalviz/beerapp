<template>
  <sui-card class="beer">
    <sui-card-content class="beer-header">
      <h3 class="left floated name">{{beer.name}}</h3>
      <sui-card-meta slot="right">{{year}}</sui-card-meta>
    </sui-card-content>
    <sui-card-content class="beer-body">
      <sui-image
      :src="beer.image_url"
      size="mini"
      class="image"
      floated="left"
    />
    </sui-card-content>
    <sui-card-content>
      <span slot="right">
        <sui-icon name="heart outline" /> {{ Math.floor(Math.random() * 30)}} likes
      </span>
      <sui-icon name="comment" /> {{ Math.floor(Math.random() * 10)}} comments
    </sui-card-content>
    <sui-card-content extra>
      <sui-input
        placeholder="Add Comment"
        icon="heart outline"
        icon-position="left"
        transparent
      />
    </sui-card-content>
  </sui-card>
</template>
<script>

export default {
  name: 'Beer',
  props: {
    beer: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    year () {
      const first_brewed = this.beer.first_brewed.split('/');
      return first_brewed[1]
    }
  }
}
</script>
<style lang="scss" scoped>
.beer {
  .name {
    max-width: 80%;
  }
  &-body {
    min-height: 200px;
  }
}
</style>