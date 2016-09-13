var React = require("react");
var ReactDOM = require("react-dom");
var Trello = require('./trello');


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Trello />, document.getElementById("app"));
});



