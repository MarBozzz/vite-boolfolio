import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import Error404 from './pages/404.vue';
import ProjectsList from './pages/ProjectsList.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  //linkExactActiveClass: 'active',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        enterClass: 'animate__animated animate__fadeIn',
        leaveClass: 'animate__animated animate__fadeOut',
      }
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About,
      meta: {
        enterClass: 'animate__animated animate__fadeIn',
        leaveClass: 'animate__animated animate__fadeOut',
      }
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts,
      meta: {
        enterClass: 'animate__animated animate__bounceInRight',
        leaveClass: 'animate__animated animate__bounceOutLeft',
      }
    },
    {
      path: '/projects-list',
      name: 'projects-list',
      component: ProjectsList,
      meta: {
        enterClass: 'animate__animated animate__fadeIn',
        leaveClass: 'animate__animated animate__fadeOut',
      }
    },
    {
      path: '/projects-list/project-detail/:slug',
      name: 'project-detail',
      component: ProjectDetail,
      meta: {
        enterClass: 'animate__animated animate__fadeIn',
        leaveClass: 'animate__animated animate__fadeOut',
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error404,
      meta: {
        enterClass: 'animate__animated animate__fadeIn',
        leaveClass: 'animate__animated animate__fadeOut',
      }
    }
  ]
})

export { router };