import Vue from 'vue';
import VueRouter from 'vue-router'
import Home from '../src/view/Home.vue'
import About from '../src/view/About.vue'
import Contact from '../src/view/Contact.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: 'Home',
        component: Home
    },
    {
        path: "/about",
        name: 'About',
        component: About
    },
    {
        path: "/contact",
        name: 'Contact',
        component: Contact
    }
];

const router = new VueRouter({
   routes,
});
export default router;