import Vue from 'vue';
import Router from 'vue-router';
import Calendar from '@/components/Calendar';
import Create from '@/components/NewEvent';
import Edit from '@/components/EditEvent';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/create',
    name: 'CreateEvent',
    component: Create,
  },
  {
    path: '/:id/edit',
    name: 'EditEvent',
    component: Edit,
  },
];

export default new Router({
  mode: 'history',
  routes,
});
