'use strict';

const koa  = require('koa');
const render = require('./render');
const app = koa();

app.use(function *() {
  this.body = render();
});

app.listen(8080);

module.exports = app;
