<template>
  <v-btn color="success" @click="incrementLikes">
    <v-icon color="red">mdi-heart</v-icon>
    <span>{{ likes }}</span>
  </v-btn>
</template>

<script>
export default {
  props: {
    likes: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    incrementLikes() {
      let tempObj = {}
      tempObj = JSON.parse(localStorage.getItem('articles'))
      // If in not in article page get article by its Index prop (from index page) else from the its route id
      this.$route.params.id === undefined
        ? tempObj[this.$props.index].likes++
        : tempObj[this.$route.params.id].likes++
      return localStorage.setItem('articles', JSON.stringify(tempObj))
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  z-index: 1000;
}
</style>
