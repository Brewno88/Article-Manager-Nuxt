<template>
  <v-select
    v-model="selected"
    :items="options"
    label="Filters"
    target="#target"
    filled
    rounded
    dense
    solo
    dark
    @input="filterArticles"
  />
</template>

<script>
export default {
  name: 'FilterArticles',
  data() {
    return {
      options: ['title', 'date', 'likes', 'author'],
      filtered: '',
      selected: ''
    }
  },
  mounted() {
    this.$data.filtered = JSON.parse(localStorage.getItem('articles'))
  },
  methods: {
    filterArticles(key, order = 'asc') {
      return function innerSort(a, b) {
        if (a[key] === undefined || b[key] === undefined) {
          // property doesn't exist on either object
          return 0
        }

        const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
        const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

        let comparison = 0
        if (varA > varB) {
          comparison = 1
        } else if (varA < varB) {
          comparison = -1
        }
        return order === 'desc' ? comparison * -1 : comparison
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
