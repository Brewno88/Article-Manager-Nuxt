<template>
  <v-container grid-list-xs>
    <v-btn color="purple" small>
      <nuxt-link :to="'/updateArticle/' + index">Update Article</nuxt-link>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  props: {
    index: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      article: {}
    }
  },
  mounted() {
    this.article = this.article = JSON.parse(localStorage.getItem('articles'))[
      this.$props.articleId
    ]
  }
}
</script>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
