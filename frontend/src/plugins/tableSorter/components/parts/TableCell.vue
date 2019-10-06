<template>
  <td v-text="tableCell"/>
</template>

<script>
export default {
  name: 'TableCell',
  props: {
    tableCell: {
      type: [Number, String],
      default: '',
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
