<template>
  <v-select
    :items="['travel', 'coding']"
    label="Filter"
    segmented
    overflow
    editable
    target="#target"
  />
</template>

<script>
export default {
  name: 'FilterArticles'
}
</script>

<style lang="scss" scoped></style>
