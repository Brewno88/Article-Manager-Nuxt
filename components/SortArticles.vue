<template>
  <v-select
    :items="someSort"
    label="Sort"
    target="#target"
    filled
    rounded
    dense
    solo
    dark
    @input="sort"
  ></v-select>
</template>

<script>
export default {
  name: 'SortArticles',
  data() {
    return {
      someSort: ['Asc', 'Decr']
    }
  },
  methods: {
    sort(selected) {
      const tempObj = JSON.parse(localStorage.getItem('articles')).slice()
      console.log(tempObj)
    }
  }
}
</script>

<style lang="scss" scoped></style>
