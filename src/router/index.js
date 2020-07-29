import Vue from "vue";
import Router from "vue-router";

import total from "../components/total.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "info",
      component: total
    }
  ]
});
