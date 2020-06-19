<template>
  <!-- Card Wrapper -->

  <v-card
    class="article article--thumb mx-auto"
    max-width="640"
    color="#E8F5E9"
    elevation="5"
  >
    <!-- Image link to article -->
    <nuxt-link :to="'/articles/' + index">
      <v-img
        aspect-ratio="2.1"
        :style="{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          zIndex: 1
        }"
      />
    </nuxt-link>
    <!-- Increment Likes Button -->
    <IncrementLikes :likes="likes" :index="index" />
    <!-- Details section (link too) -->
    <nuxt-link :to="'/articles/' + index">
      <v-container grid-list-xs>
        <h1 class="black--text" style="font-size: 1.5rem; margin-bottom: .7rem">
          {{ title }}
        </h1>
        <h3 style="font-size: .7rem; color: #757575">
          {{ date }} - by {{ author }}
        </h3>
        <p style="color: #424242; margin-top: 1rem;">
          {{ description }}
        </p>
      </v-container>
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
    image: { type: String, required: true },
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
