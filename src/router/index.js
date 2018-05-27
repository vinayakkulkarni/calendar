import Vue from 'vue';
import Router from 'vue-router';
import Calendar from '@/components/Calendar';
import Create from '@/components/NewEvent';
import Edit from '@/components/EditEvent';

Vue.use(Router);

const routes = [
  {
    path: process.env.NODE_ENV === 'production' ? '/Calendar' : '/',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: process.env.NODE_ENV === 'production' ? '/Calendar/create' : '/create',
    name: 'CreateEvent',
    component: Create,
  },
  {
    path: process.env.NODE_ENV === 'production' ? '/Calendar/:id/edit' : '/:id/edit',
    name: 'EditEvent',
    component: Edit,
  },
];

export default new Router({
  mode: 'history',
  routes,
});
