var React = require("react");
var ReactDOM = require("react-dom");

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

// The Board component should consist of a number of List components
var Board = function(props) {
  var listContainers = [];
  for (var i=0; i<props.boardState.lists.length; i++) {
    listContainers.push(<ListContainer listItem={props.boardState.lists[i]} 
                                       key={i} 
                                       title={props.boardState.lists[i].title} 
                        />);
  }
  return (
    <div className="board clearfix">
      <h1>{props.boardState.title}</h1>
      {listContainers}
    </div>
  );
};

var ListContainer = React.createClass({
  getInitialState: function() {
    return {
      text: "",
      cards: []
    };
  },
  onAddInputChanged: function(e) {
    var userInput = e.target.value;
    this.setState({
      text: userInput
    });
  },
  onAddSubmit: function(e) {
    e.preventDefault();
    var newList = this.state.cards;
    newList.push(this.state.text);
    this.setState({
      cards: newList
    });
    this.state.text = "";
  },
  render: function() {
    return (
      <List listState={this.state} 
            title={this.props.title} 
            onAddSubmit={this.onAddSubmit}
            onAddInputChanged={this.onAddInputChanged}
            cards={this.state.cards} 
            text={this.state.text} 
      />
    );
  }
});

// the List component should contain a number of Cards.
var List = function(props) {
  var cards = [];
  for (var i=0; i<props.listState.cards.length; i++) {
    cards.push(<Card text={props.listState.cards[i]} 
                     key={i} 
              />)
  }
  return (
    <div className="list">
      <h2>{props.title}</h2>
      <ul className="cards">
        {cards}
      </ul>
      <form onSubmit={props.onAddSubmit}>
        <input type="text" name="card" placeholder="Add card" onChange={props.onAddInputChanged} value={props.text} />
        <input type="submit" />
      </form>
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



