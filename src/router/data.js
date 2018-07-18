import Index from '../components/index.jsx'
import UserInfo from '../components/UserInfo.jsx'
import Submit from '../components/children_nav/submit.jsx'
import Account from '../components/children_nav/account.jsx'
import Detail from '../components/children_nav/detail.jsx'
import Home from '../components/children_nav/home.jsx';

export const config = [

    {
        path: '/userinfo',
        component: UserInfo
    },
    {
        path: '/index',
        component: Index,
        children: [{
                title: '首页',
                path: '/home',
                component: Home
            },
            {
                title: '详情',
                path: '/detail',
                component: Detail
            },
            {
                title: '提交',
                path: '/submit',
                component: Submit
            },
            {
                title: '结算',
                path: '/account',
                component: Account
            }
        ]
    }
]