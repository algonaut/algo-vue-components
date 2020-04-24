<template>
  <div id="app">
    <AlgoInput />
  </div>
</template>

<script>
import AlgoInput from './components/AlgoInput.vue';

export default {
  name: 'App',
  components: {
    AlgoInput
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
