import { createRouter, createWebHistory } from 'vue-router';
import Models from '../components/Models.vue';
import Colors from '../components/Colors.vue';
import Accessories from '../components/Accessories.vue';
import Summary from '../components/Summary.vue';


const routes = [
  {
    path: '/',
    redirect: '/models'
  },
  {
    path: '',
    redirect: '/models'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/models'
  },
  {
    path: '/models',
    name: 'Models',
    component: Models,
  },
  {
    path: '/colors',
    name: 'Colors',
    component: Colors,
  },
  {
    path: '/accessories',
    name: 'Accessories',
    component: Accessories,
  },
  {
    path: '/summary',
    name: 'Summary',
    component: Summary,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
