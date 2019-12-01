<template>
  <div id="app">
    <resume/>
  </div>
</template>

<script>
import resume from './components/resume.vue'

export default {
  name: 'app',
  components: {
    resume
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
