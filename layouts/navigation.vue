<!-- Top Navbar Layout -->
<template>
  <v-app>
    <v-app-bar dark rounded style="flex-grow: 0">
      <!-- Don't show Home Button in main page-->
      <div v-show="$route.path !== '/'">
        <HomePageButton />
        <v-spacer />
      </div>
      <!-- Don't show Add Article if not logged in -->
      <v-spacer />
      <div v-show="this.$nuxt.$auth.loggedIn === true">
        <AddArticleButton />
      </div>

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
  components: {
    Account,
    AddArticleButton,
    HomePageButton
  },
  mounted() {
    // Add 1 dummy article to local storage at first start
    if (
      process.browser &&
      JSON.parse(localStorage.getItem('articles')) === null
    ) {
      localStorage.setItem(
        'articles',
        JSON.stringify([
          {
            id: Math.ceil(Math.random() * 10000000),
            author: 'contevin@icloud.com',
            date: `15/5/2020 - 15:50`,
            title: 'This is article number one',
            description: `Gravida maximus sapien ridiculus vel condimentum pretium viverra`,
            likes: 0,
            image: `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
            imageFileName: 'unspalsh-img',
            text: `Aliquet massa curabitur et consequat netus himenaeos hendrerit cras eros felis, tellus phasellus aenean primis nibh placerat ultricies faucibus vehicula semper, risus nunc fringilla imperdiet potenti vivamus nullam facilisis varius. Turpis donec montes ac finibus luctus tristique, hac ultricies cursus adipiscing massa class augue, ipsum sapien et risus dui. Massa purus eleifend dolor dapibus sapien proin ultrices nascetur, praesent phasellus lacus ad quisque primis facilisi suscipit aliquam, venenatis potenti in diam habitasse dictum dui. Inceptos at fermentum dui rhoncus torquent eleifend aliquet habitasse faucibus aptent hac penatibus tellus, conubia aenean platea justo diam pellentesque cursus maximus dictum natoque consequat. Nibh sollicitudin taciti ligula adipiscing est tellus pulvinar sem sodales, nisi euismod arcu sed at fringilla ultricies turpis tincidunt dictumst, iaculis facilisi erat vitae sociosqu hendrerit class viverra. Nullam justo cras sapien dui conubia gravida lacinia dis, molestie mus massa dictumst volutpat auctor potenti laoreet, senectus nam augue iaculis donec accumsan maximus. Odio pellentesque quam suspendisse sit auctor ipsum erat himenaeos gravida pulvinar, etiam nisl iaculis fusce praesent proin nec vulputate aptent, dis sed ultrices ut condimentum hendrerit consectetur amet a. At facilisis adipiscing bibendum ultricies molestie habitasse dui semper est, nisl ultrices non pharetra diam fusce morbi netus feugiat parturient, euismod penatibus quam mollis platea cursus aliquam potenti.`
          }
        ])
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
