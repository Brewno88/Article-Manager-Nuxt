<template>
  <div v-if="articles[$route.params.id] !== undefined">
    <v-img
      :src="`${articles[$route.params.id].thumbnail}`"
      aspect-ratio="2.1"
    ></v-img>
    <h1>{{ articles[$route.params.id].title }}</h1>
    <article>{{ articles[$route.params.id].text }}</article>
  </div>
  <div v-else>
    <v-app dark>
      <NuxtLink to="/">
        Home page
      </NuxtLink>
    </v-app>
  </div>
</template>

<script>
export default {
  computed: {
    articles() {
      return this.$store.state.articles.list
    }
  }
}
</script>

<style lang="scss" scoped></style>
