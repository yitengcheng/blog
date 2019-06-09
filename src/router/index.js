import Vue from 'vue';
import Router from 'vue-router';
import Resume from './../views/Resume';
import Utils from './../views/Utils';
import Game from './../views/Game';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Resume',
            component: Resume
        },
        {
            path: '/utils',
            name: 'Utils',
            component: Utils
        },
        {
            path: '/game',
            name: 'Game',
            component: Game
        }
    ]
});
