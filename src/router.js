import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import Error404 from './pages/404.vue';
import ProjectsList from './pages/ProjectsList.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/projects-list',
      name: 'projects-list',
      component: ProjectsList
    },
    {
      path: '/projects-list/project-detail/:slug',
      name: 'project-detail',
      component: ProjectDetail
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error404
    }
  ]
})

export { router };