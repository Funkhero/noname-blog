<template>
  <div class="auth-page">
    <router-link to="/">На главную</router-link>
    <table-sorter
      :headers="headers"
      :items="items"
      :items-per-page="5"
    />
  </div>
</template>

<script>
  export default {
    name: 'AuthPage',
    data() {
      return {
        headers: [
          {
            text: 'Name',
            sortable: false,
            value: 'name',
          },
          {
            text: 'Weight',
            value: 'weight',
          },
          {
            text: 'Count',
            value: 'count',
          },
          {
            text: 'Coast ($)',
            value: 'coast',
          },
        ],
        items: [
          {
            name: 'Orange',
            weight: 40,
            count: 11,
            coast: 50,
          },
          {
            name: 'Tomato',
            weight: 30,
            count: 14,
            coast: 20
          },
          {
            name: 'Apples',
            weight: 45,
            count: 17,
            coast: 23,
          },
          {
            name: 'Watermelon',
            weight: 500,
            count: 4,
            coast: 140,
          },
        ]
      };
    },
  };
</script>

<style lang="scss" scoped>

</style>
