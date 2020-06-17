<template>
  <v-select
    :items="['Name', 'Date', 'Likes']"
    label="Sort"
    overflow
    target="#target"
  ></v-select>
</template>

<script>
export default {
  name: 'SortArticles'
}
</script>

<style lang="scss" scoped></style>
