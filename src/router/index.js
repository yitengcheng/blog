import Vue from 'vue';
import Router from 'vue-router';
import Resume from './../views/Resume';
import CSSCartToon from './../views/CSSCartToon';
import Calendar from './../views/Calendar';
import Register from './../views/Register';
import UserDetail from './../views/UserDetail';
import Knowledge from './../views/Knowledge';
import CSSPhoto from './../views/CSSCartToon/CSSPhoto';
import WeatherEffects from './../views/CSSCartToon/WeatherEffects';
import Birds from './../views/CSSCartToon/Birds';
import Dragon from './../views/CSSCartToon/Dragon';
import StoreLoading from './../views/CSSCartToon/StoreLoading';

Vue.use(Router);

export default new Router({
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
                    path: '/birds',
                    name: 'Birds',
                    component: Birds
                },
                {
                    path: '/dragon',
                    name: 'Dragon',
                    component: Dragon
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
        }

    ]
});
