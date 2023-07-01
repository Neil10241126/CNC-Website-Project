import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontLayout.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/front/HomeView.vue'),
      },
      {
        path: 'course',
        // component: () => import('../views/front/CoursesView.vue'),
        children: [
          {
            path: 'category',
            component: () => import('../views/front/CoursesView.vue'),
            children: [
              {
                path: ':cateId',
                component: () => import('../components/front/CourseList.vue'),
              },
            ],
          },
          {
            path: ':id',
            component: () => import('../views/front/CourseView.vue'),
          },
        ],
      },
      {
        path: 'skills',
        component: () => import('../views/front/SkillsView.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/front/AboutView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/front/OrderView.vue'),
      },
      {
        path: 'pay',
        component: () => import('../views/front/PayView.vue'),
      },
      {
        path: 'success',
        component: () => import('../views/front/SuccessView.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/front/LoginView.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/ProductsView.vue'),
      },
      {
        path: 'articles',
        component: () => import('../views/Dashboard/ArticlesView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/Dashboard/OrdersView.vue'),
      },
      {
        path: 'coupon',
        component: () => import('../views/Dashboard/CouponView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  // scrollBehavior() {
  //   return { top: 0 };
  // },
});

export default router;
