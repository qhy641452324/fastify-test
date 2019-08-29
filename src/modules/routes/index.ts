
const opts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    sex: { type: 'string' },
                    name:{type:'string'}
                }
            }
        }
    }
}

async function routes(fastify:any, options:any) {
    // 声明一个包含输入 schema 的路由
    fastify.get('/api', opts, function (request:any, reply:any) {
        // console.log(request)
        // console.log(reply)
        reply.send({ sex: 'nan',name:'qq' })
    })

    fastify.get('/index', (req: any, reply: any) => {
        reply.view('/index', { text: 'text' })
    })
    fastify.get('/page1', (req: any, reply: any) => {
        reply.view('/test/index2', { text: 'text' })
    })
    fastify.get('/page2', (req: any, reply: any) => {
        reply.view('/test/index', { text: 'text' })
    })
}

module.exports = routes