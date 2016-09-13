var React = require("react");
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

module.exports = Trello;



