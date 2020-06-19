<template>
  <v-btn
    color="success"
    absolute
    right
    fab
    small
    :style="{
      transform:
        this.$route.params.id === undefined
          ? 'translateY(-1.5rem)'
          : 'translateY(-2rem)',
      padding: '0 1.6rem'
    }"
    @click="incrementLikes"
  >
    <v-icon color="red">mdi-heart</v-icon>
    <span>{{ likes + tempLikes }}</span>
  </v-btn>
</template>

<script>
export default {
  props: {
    likes: {
      type: Number,
      required: false,
      default: 0
    },
    index: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      tempLikes: 0
    }
  },
  methods: {
    // increment temporary likes to add to likes from local Storage to temporary render correct amount
    // and increment likes in local Storage
    incrementLikes() {
      this.tempLikes++
      let tempObj = {}
      tempObj = JSON.parse(localStorage.getItem('articles'))
      // If in not in article page get article by its Index prop (from index page) else from the its route id
      this.$route.params.id === undefined
        ? tempObj[this.index].likes++
        : tempObj[this.$route.params.id].likes++

      return localStorage.setItem('articles', JSON.stringify(tempObj))
    }
  }
}
</script>

<style lang="scss" scoped></style>
