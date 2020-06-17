<template>
  <v-main>
    <v-row justify="center">
      <v-col class="d-flex" sm="3">
        <v-select
          v-model="sortOrder"
          :items="sortOrderOpt"
          label="Sort"
          target="#target"
          filled
          rounded
          dense
          solo
          dark
          @input="articles.sort(filterArticles(sortBy, sortOrder))"
        />
      </v-col>
      <v-col class="d-flex" sm="3">
        <v-select
          v-model="sortBy"
          :items="sortByOpt"
          label="Filters"
          target="#target"
          filled
          rounded
          dense
          solo
          dark
          @input="filterArticles"
        />
      </v-col>
    </v-row>

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
          :date="article.date"
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
      articles: {},
      sortOrder: 'asc',
      sortOrderOpt: ['asc', 'desc'],
      sortBy: '',
      sortByOpt: ['title', 'date', 'likes', 'author']
    }
  },
  mounted() {
    this.$data.articles = JSON.parse(localStorage.getItem('articles'))
  },
  methods: {
    // filterArticle() {
    // let tempObj = {}
    // tempObj = JSON.parse(localStorage.getItem('articles'))
    // }
    filterArticles(key, order = this.$data.sortOrder) {
      return function innerSort(a, b) {
        if (a[key] === undefined || b[key] === undefined) {
          // property doesn't exist on either object
          return 0
        }

        const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
        const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

        let comparison = 0
        if (varA > varB) {
          comparison = 1
        } else if (varA < varB) {
          comparison = -1
        }
        return order === 'desc' ? comparison * -1 : comparison
      }
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
