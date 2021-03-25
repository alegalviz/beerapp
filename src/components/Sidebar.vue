<template>
  <sui-sidebar
    :visible="sidebarVisible"
    animation="overlay"
    :direction="from"
    :class="`ui vertical ${width} sidebar`"
  >
    <div :class="`ui segment attached ${oposite} aligned close-link`" @click.stop="toggleSidebar()"><i class="close link icon"></i></div>
    <div class="ui fixed">
      <slot></slot>
    </div>
    
  </sui-sidebar>
</template>

<script>

export default {
  name: "sidebar",
  props: {
    toggleSidebar: {
      type: Function,
      required: true
    },
    sidebarVisible: {
      type: Boolean,
      required: true
    },
    prop1: {
      type: Boolean,
      required: true
    },
    prop2: {
      type: Boolean,
      required: true
    },
    prop3: {
      type: Boolean,
      required: true
    },
    prop4: {
      type: Boolean,
      required: true
    },
    from: {
      type: String,
      required: false,
      default: () => {
        return 'right'
      }
    },
    width: {
      type: String,
      required: false,
      default: () => {
        return 'wide'
      }
    }
  },
  computed: {
    oposite () {
      return this.from === 'left' ? 'right' : 'left'
    }
  }
};
</script>
<style scoped lang="scss">
.close-link {
  border: none !important;
}
@media screen {
  
}
</style>