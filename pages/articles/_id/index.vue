<!-- Article Page -->
<template>
  <v-app>
    <div v-show="this.$nuxt.$auth.user.email === article.author">
      <UpdateArticle :index="this.$route.params.id" />
    </div>
    <v-img :src="`${article.image}`" aspect-ratio="2.1"> </v-img>
    <v-container grid-list-xl style="position: relative">
      <IncrementLikes :likes="article.likes" />
      <h1>{{ article.title }}</h1>
      <small class="font-weight-bold">Published On: {{ article.date }}</small>
      <small class="font-weight-bold primary--text"
        >Author: {{ article.author }},
      </small>
      <article style="margin-top: 1rem">{{ article.text }}</article>
    </v-container>
  </v-app>
</template>

<script>
import IncrementLikes from '@/components/IncrementLikes'
import UpdateArticle from '@/components/UpdateArticle.vue'

export default {
  components: {
    IncrementLikes,
    UpdateArticle
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
