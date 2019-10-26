import Vue from 'vue';
import Router from 'vue-router';
import PageNotFound from '@/views/page-not-found';

Vue.use(Router);

const parseProps = r => ({ id: parseInt(r.params.id) });

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "bundle.home" */ './views/home.vue'),
    },
    {
      path: '/tours',
      name: 'tours',
      component: () =>
        import(/* webpackChunkName: "bundle.tours" */ './views/tours.vue'),
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: () =>
        import(/* webpackChunkName: "bundle.heroes" */ './views/heroes.vue'),
    },
    {
      path: '/heroes/:id',
      name: 'hero-detail',
      // props: true,
      props: parseProps,
      component: () =>
        import(/* webpackChunkName: "bundle.heroes" */ './views/hero-detail.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "bundle.about" */ './views/about.vue'),
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
});
