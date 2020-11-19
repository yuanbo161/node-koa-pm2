const Router = require('koa-router');

const router = new Router();


let num = "";

router
    .get('/api/', (ctx, next) => {
        ctx.body = 'hello world!';
        // ctx.body = ctx.request;
        // ctx.body = '<b>' + ctx.query.num + '</b>' 
        // num = ctx.query.a
    })
    .get('/api/test', (ctx, next) => {
        ctx.body = {
            msg: 'here is test',
            query: ctx.query,
            queryStr: ctx.querystring,
        }
    })
    .get('/api/setnum', (ctx, next) => {
        if (num === "") {
            num = ctx.query.num
        }
        else {
            if (ctx.query.num != "") num = ctx.query.num;
        }
        ctx.body = "set num success"
    })
    .get('/api/getnum', (ctx, next) => {
        
        ctx.body = num 
        // let title = "Hello Title"
        //  ctx.render('index', {title})

    }).get('/api/getnum1', async(ctx) => {
        let title = num
        await ctx.render('index', {title})
    })
    .post('/api/users', (ctx, next) => {
        // ctx.body = 'here is user';
        ctx.body = num
    })
    .all('/api/users/:id', (ctx, next) => {
        //
    });

    module.exports = router