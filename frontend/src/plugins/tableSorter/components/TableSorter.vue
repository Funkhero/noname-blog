<template>
  <div class="table-sorter">
    <table class="table">
      <table-header/>
      <table-body/>
      <table-footer/>
    </table>
  </div>
</template>

<script>
import TableHeader from './parts/TableHeader';
import TableBody from './parts/TableBody';
import TableFooter from './parts/TableFooter';

export default {
  name: 'TableSorter',
  components: {
    TableHeader,
    TableBody,
    TableFooter,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
      validator(value) {
        return value.filter(item => typeof(item) !== object).length <= 0;
      },
    },
    withPagination: {
      type: Boolean,
      default: false
    },
    withCrud: {
      type: Boolean,
      default: false
    },
  },
};
</script>

<style lang="scss" scoped>
.table-sorter {
  width: 100%;
  box-sizing: border-box;
}
</style>
