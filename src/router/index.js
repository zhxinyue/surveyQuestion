import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import CooperationArea from '../views/CooperationArea.vue'
import Question1 from '../views/Question1.vue'
import Question2 from '../views/Question2.vue'
import Question3 from '../views/Question3.vue'
import Part2 from '../views/Part2.vue'
import Part3 from '../views/Part3.vue'
import PersonalInfo from '../views/PersonalInfo.vue'
import Thanks from '../views/Thanks.vue'
import store from '../vuex/store';
Vue.use(Router)
let router = new Router({
  routes:[
    {
      path: '/',
      name: 'Index',
      component: Index

    },
    {
      path: '/cooperationArea',
      name: 'CooperationArea',
      component: CooperationArea
    },
    {
      path: '/question1',
      name: 'Question1',
      component: Question1
    },
    {
      path: '/question2',
      name: 'Question2',
      component: Question2
    },
    {
      path: '/question3',
      name: 'Question3',
      component: Question3
    },
    {
      path: '/part2',
      name: 'Part2',
      component: Part2
    },
    {
      path: '/part3',
      name: 'Part3',
      component: Part3
    },
    {
      path: '/personalInfo',
      name: 'PersonalInfo',
      component: PersonalInfo
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks
    }
  ],
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
    
  
  })

  router.beforeEach((to, from, next) => {
    // 对组件B进行动态缓存
    if (to.name === 'CooperationArea' || to.name === 'Question1' || to.name === 'Question2'|| 
    to.name === 'Question3'|| to.name === 'Part2'|| to.name === 'Part3'|| to.name === 'PersonalInfo') {
      store.commit('iskeepAlive', to.name);
    }
    next();
  })
export default router;
