<template>
  <v-app>
    <v-app-bar dark rounded style="flex-grow: 0">
      <div v-show="$route.path !== '/'">
        <HomePageButton />
        <v-spacer />
      </div>

      <v-spacer />
      <div v-if="this.$auth.loggedIn === true">
        <AddArticleButton />
      </div>
      <div v-else></div>

      <v-spacer />
      <Account />
    </v-app-bar>
    <nuxt />
  </v-app>
</template>

<script>
import Account from '../components/navigation/Account'
import AddArticleButton from '../components/navigation/AddArticleButton'
import HomePageButton from '../components/navigation/HomePageButton'

export default {
  name: 'Application',
  // middleware: 'auth',
  components: {
    Account,
    AddArticleButton,
    HomePageButton
  },
  mounted() {
    if (
      process.browser &&
      JSON.parse(localStorage.getItem('articles')) === null
    ) {
      localStorage.setItem(
        'articles',
        JSON.stringify([
          {
            author: 'contevin@icloud.com',
            date: `15/5/2020 - 15:50`,
            description: `Here we have the description of the article Imperdiet quam torquent semper vehicula tincidunt porta ut magna ad `,
            id: 0,
            likes: 0,
            text: `Cubilia venenatis vehicula lacus eu sit faucibus ligula dis phasellus senectus, dapibus varius velit lorem pellentesque tellus mattis nulla ullamcorper nunc risus, potenti penatibus aenean urna auctor non libero leo integer. Ornare aptent ad luctus sed pharetra lacus torquent cursus class, ac urna hendrerit erat malesuada magna proin tempus, scelerisque natoque sociosqu id cubilia habitant facilisis aenean. Urna penatibus quam nec hac aptent non nunc enim, neque natoque a suscipit luctus dui rutrum nibh, dis facilisi tortor sapien placerat est arcu. Semper sollicitudin vivamus magna ut aenean, elit commodo porttitor sed, justo sit ex mollis. Auctor commodo aliquam tincidunt molestie nibh vel per in nascetur nunc tortor, at ultricies quisque ex parturient ligula velit ullamcorper est. Sapien dictumst interdum scelerisque tristique cubilia nibh odio enim lacinia, donec posuere quis tellus quam himenaeos class porta, dis accumsan a volutpat blandit rutrum penatibus varius. Nibh enim tortor mollis hendrerit dignissim ac, quis penatibus luctus amet proin, vel magna at porta placerat. Volutpat amet consequat hac tempus praesent cursus vitae penatibus purus, risus condimentum posuere ornare dignissim ipsum nascetur donec, faucibus elit habitant per montes scelerisque sapien feugiat.`,
            thumbnail: `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
            title: 'This is article number one'
          }
        ])
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
