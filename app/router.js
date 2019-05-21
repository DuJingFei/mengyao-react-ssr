import { Link , Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import List from './pages/list';

/*
export default () => (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/list" component={ List }/>
    </Switch>
) */

export default function() {
    return (
        <Switch>
            <Route exact path="/" component={ Home }/> 
            <Route exact path="/list" component={ List }/>
        </Switch>
    )
} 

/*
const Home = () => (
    <div>
        <h1>首页</h1>
        <Link to='/list'>跳转列表页</Link>
    </div>
)

const list = [
    'react真好玩',
    'koa有点儿意思',
    'ssr更有意思'
]

const List = () => (
    <ul>
        { list.map((item, i) => <li key={ i }>{ item }</li>) }
    </ul>
) 


export default () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/list" component={ List }/>
    </Switch>
)
*/