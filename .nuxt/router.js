import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c7eae904 = () => interopDefault(import('../pages/addArticle.vue' /* webpackChunkName: "pages/addArticle" */))
const _4a1a3ab8 = () => interopDefault(import('../pages/auth/signed-in.vue' /* webpackChunkName: "pages/auth/signed-in" */))
const _4f53f558 = () => interopDefault(import('../pages/articles/_id/index.vue' /* webpackChunkName: "pages/articles/_id/index" */))
const _5760c702 = () => interopDefault(import('../pages/updateArticle/_id/index.vue' /* webpackChunkName: "pages/updateArticle/_id/index" */))
const _19ec6d79 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/addArticle",
    component: _c7eae904,
    name: "addArticle"
  }, {
    path: "/auth/signed-in",
    component: _4a1a3ab8,
    name: "auth-signed-in"
  }, {
    path: "/articles/:id?",
    component: _4f53f558,
    name: "articles-id"
  }, {
    path: "/updateArticle/:id?",
    component: _5760c702,
    name: "updateArticle-id"
  }, {
    path: "/",
    component: _19ec6d79,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
