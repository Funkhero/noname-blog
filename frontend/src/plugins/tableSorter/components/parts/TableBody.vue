<template>
  <tbody class="table-body">
  <tr
    v-for="(row, index) in items"
    :key="`row-item-${index}`"
    class="table-body__row"
  >
    <table-cell
      v-for="(cell, index) in row"
      :key="`cell-item-${index}`"
      :table-cell="cell"
      class="table-body__row"
    />
  </tr>
  </tbody>
</template>

<script>
import TableCell from "./TableCell";

export default {
  name: 'TableBody',
  components: {
    TableCell,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
