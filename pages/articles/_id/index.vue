<template>
  <div>
    <v-img :src="`${article.thumbnail}`" aspect-ratio="2.1">
      <IncrementLikes :likes="article.likes" />
    </v-img>
    <h1>{{ article.title }}</h1>
    <article>{{ article.text }}</article>
  </div>
</template>

<script>
import IncrementLikes from '@/components/IncrementLikes'
export default {
  components: {
    IncrementLikes
  },
  data() {
    return {
      article: {}
    }
  },
  mounted() {
    this.article = JSON.parse(localStorage.getItem('articles'))[
      this.$route.params.id
    ]
  },
  layout: 'navigation'
}
</script>

<style lang="scss" scoped></style>
