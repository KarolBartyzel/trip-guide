<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
body {
  margin: 0;
  height: 100% !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.loading {
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
}
</style>
