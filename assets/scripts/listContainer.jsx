import React from 'react';
import List from './list';

export default class ListContainer extends React.Component {
  constructor(props){      
    super(props);
    this.onAddInputChanged = this.onAddInputChanged.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);         
    this.state = {
      text: "",
      cards: []
    }     
  }
  onAddInputChanged(e) {
    let userInput = e.target.value;
    this.setState({
      text: userInput
    });
  }
  onAddSubmit(e) {
    e.preventDefault();
    var newList = this.state.cards;
    newList.push(this.state.text);
    this.setState({
      cards: newList
    });
    this.state.text = "";
  }
  render() {
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
}

