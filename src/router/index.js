import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import index from "../components/index";
import Detail from "../components/Detail";

Vue.use(Router)



export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/home', name: 'Home', component: Home},
    {path: '/login', name: 'Login', component: Login},
    {path: '/signup', name: 'SignUp', component: SignUp},
    {path: '/purchased', name: 'index', component: index},
    {path: '/profile', name: 'Detail', component: Detail},
  ]
})
