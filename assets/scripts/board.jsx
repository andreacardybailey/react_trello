import React from 'react';
import ListContainer from './listContainer';

export default function Board(props) {
  const listContainers = [];
  for (let index in props.boardState.lists) {
    listContainers.push(<ListContainer key={index} 
                                       title={props.boardState.lists[index].title} 
                        />);
  }
  return (
    <div className="board clearfix">
      <h1>{props.boardState.title}</h1>
      {listContainers}
    </div>
  );
};

module.exports = Board;