var React = require('react');
var Board = require('./views/Board');

React.render(<Board count={100} />, document.getElementById('react-container'));