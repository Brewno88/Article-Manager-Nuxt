<!-- Article Page -->
<template>
  <div>
    <v-img :src="`${article.thumbnail}`" aspect-ratio="2.1"> </v-img>
    <v-container grid-list-xl>
      <IncrementLikes :likes="article.likes" />
      <h1>{{ article.title }}</h1>
      <small class="font-weight-bold">Published On: {{ article.date }}</small>
      <small class="font-weight-bold primary--text"
        >Author: {{ article.author }},
      </small>
      <article style="margin-top: 1rem">{{ article.text }}</article>
    </v-container>
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
