<template>
  <div class="user-info">
    <router-link
      :to="profile"
      class="user-info__link"
      v-text="userInfo"
    />
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userInfo() {
      if (user && user.name) {
        return user.name;
      }

      return 'Unknown User'
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  &__link {
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    &:hover {
      color: mediumpurple;
    }
  }
}
</style>