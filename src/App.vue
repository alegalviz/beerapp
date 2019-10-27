<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    background: #504640 !important;
  }
  html.ios {
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
  html.ios,
  html.ios body {
    height: initial !important;
  }
</style>
