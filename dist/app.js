"use strict";
const app = require('fastify')();
const rt = require('./modules/routes');
const pointofview = require('point-of-view');
const ejs = require('ejs');
const ejsmate = require('ejs-mate');
app.register(pointofview, {
    engine: {
        ejs: ejs
    },
    includeViewExtension: true,
    templates: 'templates'
});
app.register(rt);
const start = async () => {
    try {
        await app.listen(3000);
        app.log.info(`server listening on ${app.server.address().port}`);
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
