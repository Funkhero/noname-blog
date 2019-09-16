<template>
  <layout>
    <transition
      name="router-pages"
      mode="out-in"
    >
      <router-view/>
    </transition>
  </layout>
</template>

<script>
import Layout from './components/layout/Layout';

export default {
  name: 'App',
  components: {
    Layout,
  },
};
</script>

<style lang="scss" scoped>
  .app-content {
    padding: 20px;
  }
</style>