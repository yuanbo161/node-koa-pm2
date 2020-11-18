const Router = require('koa-router');
const router = new Router();

router
    .get('/api/', (ctx, next) => {
    ctx.body = 'hello world!';
    })
    .get('/api/test', (ctx, next) => {
        ctx.body = {
            msg: 'here is test',
            query: ctx.query,
            queryStr: ctx.querystring,
        }
    })
    .post('/api/users', (ctx, next) => {
        ctx.body = 'here is user';
    })
    .all('/api/users/:id', (ctx, next) => {
        //
    });

    module.exports = router