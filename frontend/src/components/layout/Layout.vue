<template>
  <section class="main-layout">
    <the-header/>
    <div class="main-layout__page">
      <the-aside/>
      <div class="main-layout__content">
        <slot/>
      </div>
    </div>
    <the-footer/>
  </section>
</template>

<script>
import TheHeader from './header/Index';
import TheFooter from './footer/Index';
import TheAside from './aside/Index';

export default {
  name: 'Layout',
  comments: {
    TheHeader,
    TheFooter,
    TheAside,
  }
};
</script>
