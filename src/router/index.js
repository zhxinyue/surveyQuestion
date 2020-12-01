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

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index

    },
    {
      path: '/cooperationArea',
      name: 'CooperationArea',
      component: CooperationArea,
      meta:{
        keepAlive: true,
        isIndex: false, // 用来清从列表页进入的缓存
        isEdit: false // 用来判断是不是当前页是不是编辑页，回显数据
      }
    },
    {
      path: '/question1',
      name: 'Question1',
      component: Question1,
      meta:{keepAlive: true}
    },
    {
      path: '/question2',
      name: 'Question2',
      component: Question2,
      meta:{keepAlive: true}
    },
    {
      path: '/question3',
      name: 'Question3',
      component: Question3,
      meta:{keepAlive: true}
    },
    {
      path: '/part2',
      name: 'Part2',
      component: Part2,
      meta:{keepAlive: true}
    },
    {
      path: '/part3',
      name: 'Part3',
      component: Part3,
      meta:{keepAlive: true}
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
    },
  ],
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
})
