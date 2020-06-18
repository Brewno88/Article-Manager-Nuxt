<!-- Redirect to Add Articole page -->
<template>
  <v-btn color="success" small>
    <nuxt-link to="/addArticle">+ Add Article</nuxt-link>
  </v-btn>
</template>

<script>
export default {
  name: 'AddArticleButton'
}
</script>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
