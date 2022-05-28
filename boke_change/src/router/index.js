import Vue from 'vue'
import VueRouter from 'vue-router'
/* import Index from '../views/Index.vue'
import School from '../views/School.vue'
import NavHeader from '../components/home/NavHeader.vue'
import Pikachu from '../components/common/Pikachu.vue'
import Map from '../components/common/Map.vue'
import BokeHeader from '../components/boke/BokeHeader.vue'
import Login from '../views/Login.vue'
import Music from '../components/common/Music.vue'

import BokeInfo from '../components/boke_list/boke_list/BokInfo.vue'
import Album from '../components/boke_list/Album.vue'
import BokeAlbum from '../components/boke_list/BokeAlbum.vue' */

Vue.use(VueRouter)

const routes = [
 {
   path:'/',
 redirect:'index'
},{
  path:'/index',       /* 主页组件 */
  component:()=>import('../views/Index.vue'),
  name:'index'
},{
path:'/school',  /* school组件 */
component:()=>import('../views/School.vue'),
name:'school'
},{
  path:'/navheader',
  component:()=>import('../components/home/NavHeader.vue'),
  name:'navheader'
},{
  path:'/homecontainer',
  component:()=>import('../components/home/HomeContainer.vue'),
  name:'homecontainer'
},{
  path:'/pikachu',
  component:()=>import('../components/common/Pikachu.vue'),
  name:'pikachu'
},/* {
  path:'/map',
  component:()=>import('../components/common/Map.vue'),
  name:'map'
} ,*/
{
  path:'/boke',  /* boke组件 */
  component:()=>import('../views/Boke.vue'),
  name:'boke',
},{
  path:'/bokeheader',
  component:()=>import('../components/boke/BokeHeader.vue'),
  name:'bokeheader',
},{
  path:'/bokeleft',
  component:()=>import('../components/boke/BokeLeft'),
  name:'bokeleft',
},{
  path:'/bokecontainer',
  component:()=>import('../components/boke/BokeContainer.vue'),
  name:'bokecontainer'

},{ 
  path:'/bokeright',
  component:()=>import('../components/boke/BokeRight.vue')  ,
  name:'bokeright'
},{
  path:'/login',
  component:()=>import('../views/Login.vue'),
  name:'login'        /* 博客页的登录组件 */
},{
  path:'/music',
  component:()=>import('../components/common/Music.vue'),
  name:'music',          /*音乐组件 */
}, {
  path:'/album', 
  component:()=>import('../components/boke_list/Album.vue'),
  name:'album'  
},{
  path:'/bokeinfo',
  component:()=>import('../components/boke_list/boke_list/BokeInfo.vue'),
  name:'bokeinfo'
},{
  path:'/bokealbum',
  component:()=>import('../components/boke_list/BokeAlbum.vue'),
  name:'bokealbum',
},{
  path:'/fore',
  component:()=>import('../views/Fore.vue'),
  name:'fore',
}
  
]

const router = new VueRouter({
  mode: 'hash',
  /* base: process.env.BASE_URL, */
  routes
})

export default router
