'use strict';

const React = require('react');

class HTMLComponent extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>My little web app</title>
        </head>
        <body>
          <h1>Hello world!</h1>
        </body>
      </html>
    );
  }
};

module.exports = HTMLComponent;
