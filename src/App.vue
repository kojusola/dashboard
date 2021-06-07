<template>
  <div id="app">
    <Header/>
    <Body/>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Body from './components/body.vue'

export default {
  name: 'App',
  components: {
    Header,
    Body
  }
}
</script>

<style>
</style>
