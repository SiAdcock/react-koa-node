'use strict';

const React = require('react');
const Message = require('./Message');
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the React world</h1>
        <Message/>
      </div>
    )
  }
};

module.exports = Header;
