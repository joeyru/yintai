import Vue from 'vue'
import Router from 'vue-router'


import HomeComponent from "@/components/home.vue";
import FirstComponent from "@/components/first.vue";
import SortComponent from "@/components/sort.vue";
import CartComponent from "@/components/cart.vue";
import MyComponent from "@/components/my.vue";


import RecommendComponent from "@/components/first/recommend.vue";
import NewComponent from "@/components/first/new.vue";
import CountdownComponent from "@/components/first//countdown.vue";


import PassportComponent from "@/components/my/passport.vue";
import UsernameComponent from "@/components/my/usename.vue";


Vue.use(Router) //注册路由


const router =  new Router({
  routes: [

    {
      path: '/home',
      component: HomeComponent
    },
    {
      path: '/first',
      component: FirstComponent,

      children:[
        {
          path:"recommend",
          component:RecommendComponent
        },
        {
          path:"new",
          component:NewComponent
        },
        {
          path:"countdown",
          component:CountdownComponent
        }
      ],
      redirect:"/first/recommend"
    },
    {
      path: '/sort',
      component: SortComponent
    },
    {
      path: '/cart',
      component: CartComponent
    },
    {
      path: '/my',
      component: MyComponent,
      children:[
        {
          path:"passport",
          component:PassportComponent
        },
        {
          path:"username",
          component:UsernameComponent
        }

      ],
      redirect:"/my/passport"
    },
    {
      path: '*',
      redirect:"/home"
    }
  ]
})

export default router;
