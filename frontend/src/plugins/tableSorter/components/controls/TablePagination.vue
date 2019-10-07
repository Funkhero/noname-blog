<template>
  <div class="table-pagination">
    <ul class="table-pagination__list">
      <li
        v-if="hasPrev"
        class="table-pagination__item"
        @click="changePage(prevPage)"
      >
        <svgicon
          dir="left"
          name="arrow"
          class="table-pagination__arrow"
        />
      </li>

      <li
        v-if="!rangeIncludesPage(1)"
        class="table-pagination__item"
      >
        <div
          class="table-pagination__number"
          @click="changePage(1)"
          v-text="1"
        />
        <div
          class="table-pagination__number"
          v-text="'...'"
        />
      </li>

      <li
        v-for="page in visiblePages"
        :key="`pagination-page-${page}`"
        class="table-pagination__item"
        @click="changePage(page)"
        v-text="page"
      />

      <li
        v-if="!rangeIncludesPage(pageCount)"
        class="table-pagination__item"
      >
        <div
          class="table-pagination__number"
          v-text="'...'"
        />
        <div
          class="table-pagination__number"
          @click="changePage(pageCount)"
          v-text="pageCount"
        />
      </li>

      <li
        v-if="hasNext"
        class="table-pagination__item"
        @click="changePage(nextPage)"
      >
        <svgicon
          dir="right"
          name="arrow"
          class="table-pagination__arrow"
        />
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'TablePagination',
    props: {
      currentPage: {
        type: Number,
        default: 1,
      },
      pageCount: {
        type: Number,
        default: 0,
      },
      maxRange: {
        type: Number,
        default: 2,
      },
    },
    computed: {
      visiblePages() {
        const pages = [];

        for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
          pages.push(i);
        }

        return pages;
      },
      rangeStart() {
        const start = this.currentPage - this.maxRange;

        return (start > 0) ? start : 1;
      },
      rangeEnd() {
        const end = this.currentPage + this.maxRange;

        return (end < this.pageCount) ? end : this.pageCount;
      },
      nextPage() {
        return this.currentPage + 1;
      },
      prevPage() {
        return this.currentPage - 1;
      },
      hasPrev() {
        return this.currentPage > 1;
      },
      hasNext() {
        return this.currentPage < this.pageCount;
      },
    },
    methods: {
      rangeIncludesPage(page) {
        return this.visiblePages.includes(page);
      },
      changePage(number) {
        this.$emit('changePage', number);
      }
    },
  };
</script>

<style lang="scss" scoped>

</style>
