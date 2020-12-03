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
      component: CooperationArea,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/question1',
      name: 'Question1',
      component: Question1,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/question2',
      name: 'Question2',
      component: Question2,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/question3',
      name: 'Question3',
      component: Question3,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/part2',
      name: 'Part2',
      component: Part2,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/part3',
      name: 'Part3',
      component: Part3,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/personalInfo',
      name: 'PersonalInfo',
      component: PersonalInfo,
      meta: {
        keepAlive: true
      }
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


export default router;
