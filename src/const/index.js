import Loadable from 'react-loadable';
import Loading from '_components/loading';

export const routers = [
    {
        path: '/',
        name: '首页',
        exact: true,
        component: Loadable({
            loader: () => import('_pages/home/index'),
            loading: Loading,
        }),
    },
    {
        path: '/js-3d',
        name: 'js 3d模型',
        exact: true,
        component: Loadable({
            loader: () => import('_pages/js-3d/index'),
            loading: Loading,
        }),
    },
];
