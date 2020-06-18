<template>
  <v-card
    class="article article--thumb mx-auto"
    max-width="640"
    color="#26c6da"
    style=""
  >
    <nuxt-link :to="'/articles/' + index">
      <v-img
        aspect-ratio="2.1"
        position="bottom"
        :style="{ backgroundImage: `url(${thumbnail})` }"
      />

      <IncrementLikes :likes="likes" :index="index" />
      <v-card-title primary-title>
        {{ title }}
      </v-card-title>
      <v-card-subtitle>{{ date }} - by {{ author }}</v-card-subtitle>
      <v-card-text>
        {{ description }}
      </v-card-text>
    </nuxt-link>
  </v-card>
</template>

<script>
import IncrementLikes from '@/components/IncrementLikes'
export default {
  components: { IncrementLikes },
  props: {
    date: { type: String, required: true },
    index: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    id: { type: Number, required: true },
    author: { type: String, required: true },
    likes: { type: Number, required: true }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #ffffff;
}
.article {
  margin: 2rem 2rem;
}
</style>
