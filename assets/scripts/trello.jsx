import React from 'react';
import Board from './board';

export default class Trello extends React.Component {
  constructor(props){      
    super(props)         
    this.state = {
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
    }     
  }
  render() {
    return (
      <Board boardState={this.state} />
    );
  }
};


