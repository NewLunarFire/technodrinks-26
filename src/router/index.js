import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AnimeList from '@/components/AnimeList'
import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'AnimeList',
      component: AnimeList
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    
  ]
})
