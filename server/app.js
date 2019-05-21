import React from 'react';
import Koa from 'koa'
import { renderToString } from "react-dom/server";
import routes from './router'
import templating from './templating'

const app = new Koa();

app.use(templating);

app.use(routes.routes(), routes.allowedMethods());

app.listen(1166, () => {
    console.log('node 服务已经启动，请访问localhost:1166');
})