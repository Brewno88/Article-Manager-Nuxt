<template>
  <div v-if="$auth.loggedIn">
    <!-- User Name -->
    {{ $auth.user.email }}
    <!-- Log Out -->
    <v-btn color="warning" small @click="logoutUser()">
      <h3>Log Out</h3>
    </v-btn>
  </div>
  <div v-else="">
    <v-btn color="#26c6da" small @click="loginUser()">
      <h3>Log In/Register</h3>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Account',
  methods: {
    loginUser(loginInfo) {
      this.$auth.loginWith('auth0')
      // alert('You pressed a button')
    },
    logoutUser() {
      this.$auth.logout()
      // alert('You pressed a button')
    }
  }
}
</script>

<style lang="scss" scoped></style>
