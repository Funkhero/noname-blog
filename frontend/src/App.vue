<template>
  <layout>
    <div class="app-content">
      <transition
        name="router-pages"
        mode="out-in"
      >
        <router-view/>
      </transition>
    </div>
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
