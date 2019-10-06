<template>
  <th>
    <span v-text="headingItem.text"/>
    <i/>
  </th>
</template>

<script>
export default {
  name: "TableHeaderItem",
  props: {
    headingItem: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
