<template>
  <div class="table-footer">
    <pagination v-if="withPagination"/>
  </div>
</template>

<script>
import Pagination from '../controls/TablePagination';
export default {
  name: 'TableFooter',
  components: {
    Pagination,
  },
  props: {
    withPagination: {
      type: Boolean,
      default: false
    },
  }
};
</script>

<style lang="scss" scoped>

</style>
