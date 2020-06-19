<!-- Add Article Page -->
<template>
  <v-container grid-list-xl>
    <v-form ref="addArticleForm" v-model="valid">
      <p>Date: {{ article.date }}</p>
      <p>Author: {{ article.author }}</p>

      <v-file-input
        ref="imageInput"
        label="Add Image for Thumbnail"
        show-size
        color=""
        :rules="checkFile"
        accept="image/*"
        @change="onFileChange"
      />
      <div v-show="article.thumbnail">
        <v-btn color="error" @click="removeImage">Remove File</v-btn>
        <v-img :src="article.thumbnail" aspect-ratio="2.1" />
      </div>
      <v-text-field
        id="id"
        v-model="article.title"
        name="title"
        label="Title"
        :rules="titleLength"
      />
      <v-text-field
        v-model="article.description"
        name="description"
        label="Description"
        :rules="descLength"
      />
      <v-textarea
        v-model="article.text"
        name="text"
        label="Article Text"
        :rules="required"
      />
    </v-form>

    <v-btn color="success" :disabled="!valid" @click="storeArticle"
      >Add Article</v-btn
    >
    <div v-show="errorMessage.includes('exceeded the quota')">
      <v-alert type="error" elevation="5" style="position: fixed; bottom:1rem;">
        File selected needs to be smaller than 5MB
      </v-alert>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'AddArticlePage',
  data() {
    return {
      article: {
        id: 0,
        title: '',
        text: '',
        date: '',
        description: '',
        author: this.$auth.user.email,
        likes: 0,
        thumbnail: ''
      },
      errorMessage: '',
      // From Validation Options and Rules
      valid: false,
      required: [(v) => (v && v.length > 0) || 'This filed is required!'],
      checkFile: [
        (v) =>
          (v && v.size <= 5000000) ||
          (v && v.size >= 5000000
            ? 'Needs to be less than 5MB'
            : 'This field is required!')
      ],
      descLength: [
        (v) =>
          (v && v.length <= 300) ||
          (v && v.length >= 300
            ? 'Description must be less than 300 chars'
            : 'This field is required!')
      ],
      titleLength: [
        (v) =>
          (v && v.length <= 100) ||
          (v && v.length >= 100
            ? 'Title must be less than 100 chars'
            : 'This field is required!')
      ]
    }
  },
  layout: 'navigation',
  mounted() {
    this.article.id = JSON.parse(localStorage.getItem('articles')).length
    this.article.date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} - ${new Date().getHours()}:${new Date().getMinutes()}`
  },
  methods: {
    // add article in local storage and reset fields
    storeArticle() {
      let tempObj = {}
      tempObj = JSON.parse(localStorage.getItem('articles'))
      tempObj.unshift(this.article)
      try {
        localStorage.setItem('articles', JSON.stringify(tempObj))
        this.article.thumbnail = ''
        this.$refs.addArticleForm.reset()
      } catch (error) {
        this.errorMessage = error.message
      }
    },
    // dealing with image uploaded
    onFileChange(event) {
      if (!event) {
        return
      }
      this.createImage(event)
    },
    createImage(file) {
      const reader = new FileReader()
      // show preview if file is less than 5MB
      if (file.size < 5000000) {
        try {
          reader.onload = (e) => {
            this.article.thumbnail = e.target.result
          }
        } catch (error) {
          this.errorMessage = error
        }
        reader.readAsDataURL(file)
      } else this.thumbnail = ''
    },
    // reset Input Field
    removeImage(e) {
      this.article.thumbnail = ''
      this.$refs.imageInput.reset()
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
