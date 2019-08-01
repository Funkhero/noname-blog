<template>
  <section class="main-layout">
    <slot/>
  </section>
</template>

<script>
import statuses from '../../observers/statuses';

  export default {
    name: 'Layout',
    created() {
      setTimeout(() => statuses.pageLoading = false, 2000)
    }
  };
</script>

<style lang="scss" scoped>

</style>
