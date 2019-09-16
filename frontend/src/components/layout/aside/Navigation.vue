<template>
  <nav class="aside-navigation">
    <ul class="aside-navigation__list">
      <li
        v-for="(item, index) in navItems"
        :key="`nav-item-${index}`"
        :class="{ 'aside-navigation__item_active': $route.name === item.name }"
        class="aside-navigation__item"
      >
        <router-link
          :to="item.path"
          class="aside-navigation__link"
          v-text="item.name"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    navItems() {
      return [
        {
          path: 'create-article',
          name: 'Create New Article',
        },
        {
          path: 'articles',
          name: 'Articles',
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.aside-navigation {
  &__item {
    padding: 5px;
    height: 60px;
    background-color: #4d4d4d;
    border-bottom: lightgray;
    &:hover {
      background-color: #0a0a0a;
    }
    &_active {
      background-color: #d9534f;
    }
  }
}
</style>