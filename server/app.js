import React from 'react';
import Koa from 'koa'
import { renderToString } from "react-dom/server";
import routes from './router'

const app = new Koa();

const App = () => <div>Hello Koa,By renderToString</div>

app.use(routes.routes(), routes.allowedMethods());

app.listen(1166, () => {
    console.log('node 服务已经启动，请访问localhost:1166');
})