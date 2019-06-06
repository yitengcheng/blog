import Vue from 'vue';
import Router from 'vue-router';
import Home from './../views/Home';
import Utils from './../views/Utils';
import Game from './../views/Game';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
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
