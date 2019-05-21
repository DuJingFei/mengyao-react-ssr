import Router from 'koa-router';
import React from 'react';

const routes = new Router();

routes.get('/', (ctx, next) => {
    ctx.render({
        home: {
            title: '冷咖啡离开了杯垫'
        }
    });
    next();
})

routes.get('/list', (ctx, next) => {
    ctx.render({
        list: {
            list: [
                '最美的不是下雨天',
                '是曾与你躲过雨的屋檐',
                '回忆的画面......',
            ]
        }
    });
    next();
})

export default routes;
