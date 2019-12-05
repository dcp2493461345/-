import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path:"/index",
    component:()=>import("../views/Index.vue")
  },
  {
    path:"/about",
    component:()=>import("../views/About.vue")
  },
  {
    path:"/new",
    component:()=>import("../views/New.vue")
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
