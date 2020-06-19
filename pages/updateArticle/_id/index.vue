<!-- Add Article Page -->
<template>
  <v-container grid-list-xl>
    <v-form ref="addArticleForm" v-model="valid">
      <p>Date: {{ article.date }}</p>
      <p>Author: {{ article.author }}</p>

      <v-file-input
        ref="imageInput"
        label="Add New Image for Thumbnail"
        show-size
        :rules="fileValid"
        accept="image/*"
        @change="onFileChange"
      />
      <div v-show="article.image">
        <v-btn color="error" @click="removeImage">Remove File</v-btn>
        <v-img :src="article.image" aspect-ratio="2.1" />
      </div>
      <v-text-field
        id="id"
        v-model="article.title"
        name="title"
        label="Title"
        :rules="titleValid"
      />
      <v-text-field
        v-model="article.description"
        name="description"
        label="Description"
        :rules="descValid"
      />
      <v-textarea
        v-model="article.text"
        name="text"
        label="Article Text"
        :rules="textValid"
      />
    </v-form>

    <v-btn color="success" :disabled="!valid" @click="updateArticle"
      >Update Article</v-btn
    >
    <v-btn :disabled="!deleteBtn" color="error" @click="deleteArticle"
      >Delete Article</v-btn
    >
    <v-alert
      v-if="errorMessage.includes('exceeded the quota')"
      type="error"
      elevation="5"
      style="position: fixed; bottom:1rem;"
    >
      {{ errorMessage }}
    </v-alert>

    <v-alert
      v-else-if="!deleteBtn"
      type="error"
      elevation="5"
      style="position: fixed; left: 50%; bottom: 50%; transform: translateX(-50%)"
      prominent
    >
      Article Deleted! Redirecting to Homepage...
    </v-alert>
  </v-container>
</template>

<script>
export default {
  name: 'AddArticlePage',
  data() {
    return {
      article: {},
      deleteBtn: true,
      errorMessage: '',
      // From Validation Options and Rules
      valid: false,
      textValid: [(v) => (v && v.length > 0) || 'This filed is required!'],
      fileValid: [
        (v) => {
          if (!v && this.article.image !== undefined) {
            return 'This field is required!'
          } else if (v) {
            if (v.size >= 5000000) {
              return 'Image size must be less than 5MB'
            } else if (v.size <= 5000000) {
              return true
            }
          }
          return true
        }
      ],
      descValid: [
        (v) =>
          (v && v.length <= 300) ||
          (v && v.length >= 300
            ? 'Description must be less than 300 chars'
            : 'This field is required!')
      ],
      titleValid: [
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
    this.article = JSON.parse(localStorage.getItem('articles'))[
      this.$route.params.id
    ]
  },
  methods: {
    // add article in local storage and reset fields
    updateArticle() {
      let tempObj = {}
      tempObj = JSON.parse(localStorage.getItem('articles'))
      tempObj[this.$route.params.id] = this.article
      localStorage.setItem('articles', JSON.stringify(tempObj))
    },
    deleteArticle() {
      this.deleteBtn = false
      let tempObj = {}
      tempObj = JSON.parse(localStorage.getItem('articles'))
      tempObj.splice(tempObj[this.$route.params.id], 1)
      localStorage.setItem('articles', JSON.stringify(tempObj))
      // return to homepage
      window.location = 'http://localhost:3000'
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
            this.article.image = e.target.result
          }
        } catch (error) {
          this.errorMessage = error
        }
        reader.readAsDataURL(file)
      } else this.image = ''
    },
    // reset Input Field
    removeImage(e) {
      this.article.image = ''
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
