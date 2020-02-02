import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import about from '@/components/about';
import profile from '@/components/profile';
import card from '@/components/pages/card';
import child1 from "@/components/pages/child1";
import child2 from "@/components/pages/child2";
import child3 from "@/components/pages/child3";


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/profile/:id?', //go to profile/(and whatsoever), "?"可有可無。沒有的話, 網址一定要是profile/userID, 這樣的形式才能顯示。有的話點擊profile就可以渲染
            name: 'profile',
            component: profile
        },
        {
            path: '/pages', //go to profile/(and whatsoever), "?"可有可無。沒有的話, 網址一定要是profile/userID, 這樣的形式才能顯示。有的話點擊profile就可以渲染
            name: 'pages',
            component: card,
            children: [{
                    name: 'child1',
                    path: '', //移除意味著, 在/page的路徑下直接載入卡片一
                    component: child1
                },
                {
                    name: 'child2',
                    path: 'child2',
                    component: child2
                },
                {
                    name: 'child3',
                    path: 'child3',
                    component: child3
                },

            ]
        },

    ]
})