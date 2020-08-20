import Vue from 'vue';
import Router from 'vue-router';
import Resume from './../views/Resume';
import CSSCartToon from './../views/CSSCartToon';
import Calendar from './../views/Calendar';
import Register from './../views/Register';
import UserDetail from './../views/UserDetail';
import Knowledge from './../views/Knowledge';
import ImageList from './../views/ImageList';
import ImageDetail from './../views/ImageDetail';
import FileChange from './../views/FileChange';
import CSSPhoto from './../views/CSSCartToon/CSSPhoto';
import WeatherEffects from './../views/CSSCartToon/WeatherEffects';
import StoreLoading from './../views/CSSCartToon/StoreLoading';
import TaintedChickenSoup from './../views/TaintedChickenSoup';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/blog/',
    routes: [
        {
            path: '/',
            name: 'Resume',
            component: Resume
        },
        {
            path: '/cSSCartToon',
            name: 'CSSCartToon',
            component: CSSCartToon,
            children: [
                {
                    path: '/cssPhoto',
                    name: 'CSSPhoto',
                    component: CSSPhoto
                },
                {
                    path: '/weatherEffects',
                    name: 'WeatherEffects',
                    component: WeatherEffects
                },
                {
                    path: '/storeLoading',
                    name: 'StoreLoading',
                    component: StoreLoading
                }
            ]
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/userDetail',
            name: 'UserDetail',
            component: UserDetail
        },
        {
            path: '/knowledge',
            name: 'Knowledge',
            component: Knowledge
        },
        {
            path: '/imageList',
            name: 'ImageList',
            component: ImageList
        },
        {
            path: '/imageDetail',
            name: 'ImageDetail',
            component: ImageDetail
        },
        {
            path: '/fileChange',
            name: 'FileChange',
            component: FileChange
        },
        {
            path: '/taintedChickenSoup',
            name: 'TaintedChickenSoup',
            component: TaintedChickenSoup
        }
    ]
});
