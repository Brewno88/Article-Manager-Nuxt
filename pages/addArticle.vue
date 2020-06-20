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
        :rules="checkFile"
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
        author: this.$auth.user.email,
        date: '',
        title: '',
        description: '',
        likes: 0,
        image: '',
        imageFileName: '',
        text: ''
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
    this.article.id = Math.ceil(Math.random() * 10000000)
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
        this.article.image = ''
        this.article.id = Math.ceil(Math.random() * 10000000)
        this.$refs.addArticleForm.reset()
        window.location = 'localhost:3000'
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
            this.article.image = e.target.result
            this.article.imageFileName = file.name
            console.log(e)
          }
        } catch (error) {
          this.errorMessage = error
        }
        reader.readAsDataURL(file)
        console.log(file)
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
