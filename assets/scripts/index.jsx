var React = require("react");
var ReactDOM = require("react-dom");

var Trello = React.createClass({
  getInitialState: function() {
    return {
      title: "Things to get done",
      lists: [
          {
              id: "0",
              title: "To do",
              cards: ["do laundry", "clean dishes"]
          },
          {
              id: "1",
              title: "In progress",
              cards: ["vacuum", "dust"]
          },
          {
              id: "2",
              title: "Completed",
              cards: ["wash car", "mow lawn"]
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

//The Board component should consist of a number of List components
 var Board = function(props) {
  var lists = [];
  for (var i=0; i<props.boardState.lists.length; i++) {
    lists.push(<List listItem={props.boardState.lists[i]} />);
  }
  return (
    <div className="board clearfix" key="10">
      <h1>{props.boardState.title}</h1>
      {lists}
    </div>
  );
 };

  // the List component should contain a number of Cards.
 var List = function(props) {
  var cards = [];
  for (var i=0; i<props.listItem.cards.length; i++) {
    cards.push(<Card text={props.listItem.cards[i]}/>)
  }

  return (
    <div className="list">
      <h2>{props.listItem.title}</h2>
      <ul className="cards">
        {cards}
      </ul>
    </div>
  );
 };

// the Card component
var Card = function(props) {
  return (
    <li className="card">
        {props.text}
    </li>
  );
};


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Trello />, document.getElementById("app"));
});



