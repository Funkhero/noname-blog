<template>
  <thead class="table-header">
    <tr>
      <heading-item
        v-for="(item, index) in headers"
        :key="`table-header-item${index}`"
        :heading-item="item"
        class="table-header__cell"
      />
    </tr>
  </thead>
</template>

<script>
import HeadingItem from './TableHeaderItem';

export default {
  name: 'TableHeader',
  components: {
    HeadingItem,
  },
  props: {
    headers: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
