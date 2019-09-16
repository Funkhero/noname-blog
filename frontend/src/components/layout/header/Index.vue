<template>
  <header class="header">
    <div class="header__left-side">
      <user/>
    </div>
    <div class="header__right-side">
      <button
        class="logout"
        v-text="'Logout'"
        @click="$router.push({ path: '/logout' })"
      />
    </div>
  </header>
</template>

<script>
import User from './User';

export default {
  name: 'Header',
  components: {
    User,
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  background-color: #4d4d4d;
  display: flex;
  align-items: center;
  &__left-side {
    width: 260px;
    height: 100%;
    background-color: #d9534f;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__right-side {
    flex-grow: 1;
    padding: 0 30px;
  }
}
</style>