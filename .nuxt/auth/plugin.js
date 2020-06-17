import Auth from './auth'

import './middleware'

// Active schemes
import scheme_23514a38 from './schemes/oauth2.js'

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":false,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":{"login":"/","logout":"/","home":"/","callback":"/auth/signed-in"},"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/"}},"localStorage":{"prefix":"auth."},"token":{"prefix":"_token."},"refresh_token":{"prefix":"_refresh_token."},"defaultStrategy":"auth0"}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // auth0
  $auth.registerStrategy('auth0', new scheme_23514a38($auth, {"domain":"dev-v-useasu.eu.auth0.com","client_id":"EvD7u8vYN73eh36eXjRToviSUSivc68N","_name":"auth0","authorization_endpoint":"https://dev-v-useasu.eu.auth0.com/authorize","userinfo_endpoint":"https://dev-v-useasu.eu.auth0.com/userinfo","scope":["openid","profile","email"]}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      console.error('[ERROR] [AUTH]', error)
    }
  })
}
