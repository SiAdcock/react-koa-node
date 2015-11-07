'use strict';

const React =  require('react');
const ReactDOM = require('react-dom/server');
const HTMLComponent = require('../../build/assets/js/HTMLComponent.js');

module.exports = () => {
  return ReactDOM.renderToString(
    React.createElement(HTMLComponent)
  );
};
