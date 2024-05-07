
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import InhelloHelloManager from "./components/listers/InhelloHelloCards"
import InhelloHelloDetail from "./components/listers/InhelloHelloDetail"

import OutHelloWorldManager from "./components/listers/OutHelloWorldCards"
import OutHelloWorldDetail from "./components/listers/OutHelloWorldDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/inhellos/hellos',
                name: 'InhelloHelloManager',
                component: InhelloHelloManager
            },
            {
                path: '/inhellos/hellos/:id',
                name: 'InhelloHelloDetail',
                component: InhelloHelloDetail
            },

            {
                path: '/outHellos/worlds',
                name: 'OutHelloWorldManager',
                component: OutHelloWorldManager
            },
            {
                path: '/outHellos/worlds/:id',
                name: 'OutHelloWorldDetail',
                component: OutHelloWorldDetail
            },



    ]
})
