<template>
  <aside class="sidebar">
    <component
      v-for="name in sidebarComponents"
      :is="name"
      :key="`sidebar-component-${name}`"
    />
  </aside>
</template>

<script>
  export default {
    name: 'Aside',
    computed: {
      sidebarComponents() {
        return {
          navigation: () => import('./Navigation'),
        };
      },
    }
  };
</script>
