<template>
  <footer class="footer">
    <span class="footer__copy">
      Copyright 2019 ©
    </span>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  };
</script>

<style lang="scss" scoped>
.footer {
  height: 40px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  &__copy {
    color: lightgray;
    font-size: 14px;
    line-height: 16px;
  }
}
</style>