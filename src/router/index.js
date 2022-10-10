import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
      path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("../components/TutorialsList")
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("../components/Tutorial")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../components/AddTutorial")
    }
]

const router = new VueRouter({
  routes
})

export default router