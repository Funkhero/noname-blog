<template>
  <layout>
    <div class="app-content">
      <transition
        name="router-pages"
        mode="out-in"
      >
        <router-view/>
      </transition>
      <transition
        name="fade-out"
        mode="out-in"
      >
        <loader v-if="statuses.pageLoading"/>
      </transition>
    </div>
  </layout>
</template>

<script>
import statuses from './observers/statuses';
import Layout from './components/layout/Layout.vue';
import Loader from './components/common/Loader.vue';

export default {
  name: 'App',
  components: {
    Layout,
    Loader,
  },
  computed: {
    statuses() {
      return statuses;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-content {
  padding: 20px;
}
</style>
