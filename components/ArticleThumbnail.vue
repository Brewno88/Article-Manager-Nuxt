<template>
  <v-card
    class="article article--thumb mx-auto"
    max-width="640"
    color="#26c6da"
  >
    <nuxt-link :to="'/articles/' + id">
      <v-img
        aspect-ratio="2.1"
        position="bottom"
        :style="{ backgroundImage: `url(${thumbnail})` }"
      >
      </v-img>
      <v-card-title primary-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        {{ description }}
      </v-card-text>
    </nuxt-link>
  </v-card>
</template>

<script>
export default {
  props: ['thumbnail', 'title', 'description', 'id']
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #ffffff;
}
.article {
  margin: 2rem 0;
}
</style>
