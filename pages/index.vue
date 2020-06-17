<template>
  <v-main>
    <div v-if="this.$auth.loggedIn === true">
      <div v-for="(article, index) in articles" :key="article.id">
        <ArticleThumbnail
          :id="article.id"
          :title="article.title"
          :thumbnail="article.thumbnail"
          :description="article.description"
          :author="article.author"
          :likes="article.likes"
          :index="index"
          @change="updateArticles"
        />
      </div>
    </div>
    <div v-else><h1>Please Sign in</h1></div>
  </v-main>
</template>

<script>
import ArticleThumbnail from '@/components/ArticleThumbnail'

export default {
  components: {
    ArticleThumbnail
  },
  data() {
    return {
      articles: {}
    }
  },
  mounted() {
    this.$data.articles = JSON.parse(localStorage.getItem('articles'))
  },
  methods: {
    updateArticles() {
      this.$data.articles = JSON.parse(localStorage.getItem('articles'))
      console.log(this.$data.articles)
    }
  },
  layout: 'navigation'
}
</script>

<style lang="scss" scoped>
.modify-view {
  display: flex;
  width: 50%;
  justify-content: space-around;
}
</style>
