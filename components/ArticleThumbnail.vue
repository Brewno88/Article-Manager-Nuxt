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
    <IncrementLikes :likes="likes" :index="index" />
  </v-card>
</template>

<script>
import IncrementLikes from '@/components/IncrementLikes'
export default {
  components: { IncrementLikes },
  props: {
    index: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    id: { type: Number, required: true },
    author: { type: String, required: true },
    likes: { type: Number, required: true }
  },
  mounted() {}
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
