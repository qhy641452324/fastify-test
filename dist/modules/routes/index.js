"use strict";
const opts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    sex: { type: 'string' },
                    name: { type: 'string' }
                }
            }
        }
    }
};
async function routes(fastify, options) {
    // 声明一个包含输入 schema 的路由
    fastify.get('/api', opts, function (request, reply) {
        // console.log(request)
        // console.log(reply)
        reply.send({ sex: 'nan', name: 'qq' });
    });
    fastify.get('/index', (req, reply) => {
        reply.view('/index', { text: 'text' });
    });
    fastify.get('/page1', (req, reply) => {
        reply.view('/test/index2', { text: 'text' });
    });
    fastify.get('/page2', (req, reply) => {
        reply.view('/test/index', { text: 'text' });
    });
}
module.exports = routes;
