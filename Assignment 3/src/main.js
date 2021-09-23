//Imports important content from Vue, and the src and components folders
import Vue from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import Search from './components/Search.vue';
import Contact from './components/ContactPage.vue';
import Profile from './components/Profile.vue';
import VueRouter from 'vue-router';
import CarListing from "./components/CarListing.vue"
import ProfileInfo from "./components/ProfileInfo.vue"

//Register Global Vue components, partially due to Local registration being ineffecitive for an unknown reason
Vue.component('car-listing', CarListing);
Vue.component('profile-info', ProfileInfo);

//Establishes the usage the Vue Router
Vue.use(VueRouter);

Vue.config.productionTip = true;

//Create an array containing paths for each component to display. 
const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/search', name: 'search', component: Search },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/profile', name: 'profile', component: Profile },
    { path: "*", redirect: "/" }
]

//Create a new VueRouter process, containing the paths in the routes array
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
});

//Creates a new Vue program, which is mounted to the content div in index.html. Contains the Vueroute, and renders App.vue when run.
new Vue({
    router,
    render: h => h(App)
}).$mount('#content');
