import React from 'react';
import Card from './card';

export default function List(props) {
  const cards = [];

  for (let index in props.cards) {
   cards.push(<Card text={props.cards[index]} 
                     key={index} 
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