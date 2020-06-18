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
          @input="updateOrder"
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
          @input="updateOrder"
        />
      </v-col>
    </v-row>

    <div v-if="this.$auth.loggedIn === true">
      <div v-for="(article, index) in articles" :key="article.id">
        <ArticleCard
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
import ArticleCard from '@/components/ArticleCard'

export default {
  components: {
    ArticleCard
  },
  data() {
    return {
      articles: {},
      sortOrder: '',
      sortOrderOpt: ['asc', 'desc'],
      sortBy: '',
      sortByOpt: ['title', 'date', 'likes', 'author']
    }
  },
  mounted() {
    this.$data.articles = JSON.parse(localStorage.getItem('articles'))
  },
  methods: {
    compare(a, b) {
      const key = this.$data.sortBy
      const order = this.$data.sortOrder

      if (!a[key] || !b[key] === undefined) {
        return 0
      }

      const artA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
      const artB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

      let comparison = 0
      artA > artB ? (comparison = 1) : (comparison = -1)

      return order === 'desc' ? comparison * -1 : comparison
    },
    updateOrder(selected) {
      selected === 'desc' || selected === 'asc'
        ? (this.$data.sortOrder = selected)
        : (this.$data.sortBy = selected)
      let tempObj = {}
      tempObj = JSON.parse(localStorage.getItem('articles'))
      tempObj.sort(this.compare)
      this.$data.articles = tempObj
      localStorage.setItem('articles', JSON.stringify(tempObj))
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
