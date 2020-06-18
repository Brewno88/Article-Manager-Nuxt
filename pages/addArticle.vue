<!-- Add Article Page -->
<template>
  <v-container grid-list-xl>
    <v-form>
      <p>Date: {{ date }}</p>
      <p>Author: {{ author }}</p>
      <v-text-field
        v-model="thumbnail"
        name="thumbnail"
        label="Add Image Link"
      />
      <v-text-field id="id" v-model="title" name="title" label="Title" />
      <v-text-field
        v-model="description"
        name="description"
        label="Description"
      />
      <v-textarea v-model="text" name="text" label="Article Text" />
    </v-form>

    <v-btn color="success" @click="storeArticle()">Add Article</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'AddArticlePage',
  data() {
    return {
      id: 0,
      title: '',
      text: '',
      date: '',
      description: '',
      author: this.$auth.user.email,
      likes: 0,
      thumbnail: ''
    }
  },
  layout: 'navigation',
  mounted() {
    this.id = JSON.parse(localStorage.getItem('articles')).length
    this.date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} - ${new Date().getHours()}:${new Date().getMinutes()}`
  },
  methods: {
    // add article in local storage and reset fileds
    storeArticle() {
      let tempObj = {}
      tempObj = JSON.parse(localStorage.getItem('articles'))
      tempObj.unshift(this.$data)
      localStorage.setItem('articles', JSON.stringify(tempObj))
      this.id++
      this.title = ''
      this.text = ''
      this.description = ''
      this.thumbnail = ''
    }
  },
  head() {
    return {
      title: 'Add Article'
    }
  }
}
</script>

<style lang="scss" scoped></style>
