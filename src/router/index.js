// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'


// 解决路由重复问题
const originalReplace = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalReplace.call(this, location).catch(err => err);
};

import Login from '../components/Login'
import Index from '../components/Index'
import OfficialNews from '../components/pages/Index/Containers/OfficialNews'
import Album from '../components/pages/Index/Containers/Album'
import ChangePass from '../components/pages/Index/Containers/ChangePass'
import Chart from '../components/pages/Index/Containers/Chart'
import Goods from '../components/pages/Index/Containers/Goods'
import Other from '../components/pages/Index/Containers/Other'
import PersonalInfo from '../components/pages/Index/Containers/PersonalInfo'
import UserInfo from '../components/pages/Index/Containers/UserInfo'
import RecentTrip from '../components/pages/Index/Containers/RecentTrip'

export default new VueRouter({
    routes: [
        { path: '/', redirect: "login" },
        { name: 'login', path: '/login', component: Login },


        {
            name: 'index', path: '/index', component: Index,
            children: [
                { name: 'OfficialNews', path: 'OfficialNews', component: OfficialNews },
                { name: 'Album', path: 'Album', component: Album },
                { name: 'ChangePass', path: 'ChangePass', component: ChangePass },
                { name: 'Chart', path: 'Chart', component: Chart },
                { name: 'Goods', path: 'Goods', component: Goods },
                { name: 'Other', path: 'Other', component: Other },
                { name: 'PersonalInfo', path: 'PersonalInfo', component: PersonalInfo },
                { name: 'UserInfo', path: 'UserInfo', component: UserInfo },
                { name: 'RecentTrip', path: 'RecentTrip', component: RecentTrip },
            ]
        },
    ]
})