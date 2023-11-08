import { createRouter, createWebHistory } from "vue-router";
import { authStore } from "../stores/authStore";
import HomeView from "../views/HomeView.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: AdminLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/user",
        name: "UserIndex",
        component: () => import("../views/user/Index.vue"),
      },
      {
        path: "/user/create",
        name: "UserCreate",
        component: () => import("../views/user/Form.vue"),
      },
      {
        path: "/user/edit/:id",
        name: "UserEdit",
        component: () => import("../views/user/Form.vue"),
      },
      // role and permissions
      {
        path: "/role",
        name: "Role",
        component: () => import("../views/role/Index.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/auth/Login.vue"),
      },
      {
        path: "/unauthorized",
        name: "Unauthorized",
        component: () =>
          import(
            /* webpackChunkName: "login" */ "../views/auth/Unauthorized.vue"
          ),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "PageNotFound",
        component: () =>
          import(
            /* webpackChunkName: "login" */ "../views/commons/PageNotFound.vue"
          ),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

function middlewarePipeline(context, middleware, index) {
  const nextMiddleware = middleware[index];

  if (!nextMiddleware) {
    return context.next;
  }

  return () => {
    const nextPipeline = middlewarePipeline(context, middleware, index + 1);

    nextMiddleware({ ...context, next: nextPipeline });
  };
}

router.beforeEach((to, from, next) => {
  const auth = authStore();
  if (!auth.token && to.name != "Login") {
    next("/login");
  }

  if (!to.meta.middleware) {
    return next();
  }

  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
    auth,
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
