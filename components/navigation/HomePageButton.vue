<!-- Go back to Homapage when in article's page -->
<template>
  <v-btn color="orange" small>
    <nuxt-link to="/">
      <v-icon>mdi-arrow-left</v-icon>
      <v-icon>mdi-home</v-icon>
    </nuxt-link>
  </v-btn>
</template>

<script>
export default {
  name: 'HomePageButton'
}
</script>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
