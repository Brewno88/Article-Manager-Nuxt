<template>
  <v-app>
    <v-app-bar fixed>
      <Account />
      <div class="modify-view">
        <SortArticles />
        <FilterArticles />
      </div>
    </v-app-bar>

    <v-main>
      <div v-for="article in articles" :key="article.id">
        <ArticleThumbnail
          :id="article.id"
          :title="article.title"
          :thumbnail="article.thumbnail"
          :description="article.description"
        />
        {{ title }}
      </div>
    </v-main>
  </v-app>
</template>

<script>
import ArticleThumbnail from '../components/ArticleThumbnail'
import Account from '../components/Account'
import FilterArticles from '../components/FilterArticles'
import SortArticles from '../components/SortArticles'

export default {
  components: {
    ArticleThumbnail,
    Account,
    SortArticles,
    FilterArticles
  },
  computed: {
    articles() {
      return this.$store.state.articles.list
    }
  }
}
</script>

<style lang="scss" scoped>
.modify-view {
  display: flex;
  width: 50%;
  justify-content: space-around;
}
</style>
