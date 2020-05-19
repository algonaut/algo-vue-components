<template>
  <div id="app">
    <b-container>
      <h2>Create Asset</h2>
      <CreateAssetForm @submit="handleSubmit" />

      <h2>Send Asset</h2>
      <SendAssetForm @submit="handleSubmit" />

      <h2>Clawback Asset</h2>
      <ClawbackAssetForm @submit="handleSubmit" />
    </b-container>
  </div>
</template>

<script>
import CreateAssetForm from '@/components/forms/CreateAssetForm';
import SendAssetForm from '@/components/forms/SendAssetForm';
import ClawbackAssetForm from '@/components/forms/ClawbackAssetForm';

export default {
  name: 'App',
  components: {
    CreateAssetForm,
    SendAssetForm,
    ClawbackAssetForm
  },
  methods: {
    handleSubmit(payload) {
      console.log(payload);
    }
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
