<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  html.ios {
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
  html.ios,
  html.ios body {
    height: initial !important;
  }
</style>
