<template>
  <sui-card class="beer">
    <sui-card-content class="header beer-header">
      <h3 class="left floated name">{{beer.name}}</h3>
      <sui-card-meta slot="right" :title="`First brewed: ${beer.first_brewed}`">
        {{year}}
      </sui-card-meta>
    </sui-card-content>
    <sui-card-content class="beer-body">
      <sui-image
      :src="beer.image_url"
      size="mini"
      class="image"
      floated="left"
    />
    <p class="tagline"><i class="float right">{{beer.tagline}}</i></p>
    <p class="descript">
      {{beer.description}}
    </p>
    <div class="ui horizontal segments">
      <div class="abv ui segment">
        <span title="Alcohol By Volume">ABV</span> <span :style="`color: ${colored(beer.abv * 10)};`">{{beer.abv}}</span>
      </div>
      <div class="ibu ui segment">
        <span title="International Bitterness Units">IBU</span> <span :style="`color: ${colored(beer.ibu)};`">{{beer.ibu}}</span>
      </div>
    </div>
    </sui-card-content>
    <sui-card-content extra>
      <span slot="right">
        <sui-icon name="heart outline" /> {{ randomize(30) }} likes
      </span>
      <sui-icon name="comment" /> {{ randomize(10) }} comments
    </sui-card-content>
    <router-link
      :to="{ name: 'beer', params: { beerId: beer.id }}"
      class="ui bottom attached button"
      @click.native="$event.stopImmediatePropagation()"
    >
      Read more!
    </router-link>
  </sui-card>
</template>
<script>
import { colored, randomize } from '@/utils'
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
      colored: colored,
      randomize: randomize
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
    min-height: 120px;
  }
  .tagline {
    text-align: right;
    margin-top: 20px !important;
    font-size: 16px;
  }
  .descript {
    color: rgb(77, 77, 77);
    max-height: 115px;
    overflow: hidden;
    position: relative;
    clear: both;
    &:after {
      content: '';
      display: block;
      height: 50%;
      position: absolute;
      top: 60px;
      right: 20px;
      background-image: linear-gradient(to bottom, transparent, white);
      width: 100%;
      right: 0;
    }
  }
  .beer-body {
    position: relative;
  }
  .abv, .ibu {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>