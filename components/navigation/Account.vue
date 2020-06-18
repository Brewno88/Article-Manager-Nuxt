<template>
  <div>
    <!-- If user Logged In show Logout button, else Login/Register Button -->
    <div v-if="$auth.loggedIn" class="d-flex flex-column-reverse align-center">
      <v-btn color="warning" small @click="logoutUser()">
        <h3>Log Out</h3>
      </v-btn>
    </div>
    <div v-else="">
      <v-btn color="#26c6da" @click="loginUser()">
        <h3>Log In/Register</h3>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Account',
  methods: {
    loginUser(loginInfo) {
      this.$auth.loginWith('auth0')
    },
    logoutUser() {
      this.$auth.logout()
    }
  }
}
</script>

<style lang="scss" scoped></style>
