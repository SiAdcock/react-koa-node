'use strict';

const koa = require('koa');
const app = koa();
const React = require('react');
const ReactDOM = require('react-dom/server');
const Header = require('./build/Header');
function render() {
  return ReactDOM.renderToString(
    React.createElement(Header)
  );
}

app.use(function *() {
  this.body = render();
});

app.listen(8080);
