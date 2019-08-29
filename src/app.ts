const app = require('fastify')({ logger:true})
const rt = require('./modules/routes')
const pointofview = require('point-of-view')
const ejs = require('ejs')
const ejsmate = require('ejs-mate')

//静态文件路径配置
const serveStatic = require('serve-static')
const path = require('path')
app.use(serveStatic('public'))

app.register( pointofview , {
    engine: {
        ejs: ejs
    },
    includeViewExtension: true,//省略ejs后缀
    templates: 'templates'
})

app.register(rt)

const start = async () => {
    try {
        await app.listen(3000)
        app.log.info(`server listening on ${app.server.address().port}`)
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}
start()