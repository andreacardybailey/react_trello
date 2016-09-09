var React = require("react");
var ReactDOM = require("react-dom");
var Board = require('./board');

var Trello = React.createClass({
  getInitialState: function() {
    return {
      title: "Things to get done",
      lists: [
          {
            title: "To do"
          },
          {
            title: "In progress"
          },
          {
            title: "Completed"
          }
      ]
    };
  },
  render: function() {
    return (
      <Board boardState={this.state} />
    );
  }
});


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Trello />, document.getElementById("app"));
});



