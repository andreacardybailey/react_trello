var React = require("react");
var List = require('./list');

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

module.exports = ListContainer;