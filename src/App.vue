<template>
  <div id="app">
    <OverviewPage/>
    <ErrorPage/>
  </div>
</template>

<script>
import OverviewPage from './pages/OverviewPage.vue'
import ErrorPage from './pages/ErrorPage.vue'

export default {
  name: 'App',
  components: {
    OverviewPage,
    ErrorPage
  }
}
</script>

<style>
#app {
  min-width: 100%;
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
