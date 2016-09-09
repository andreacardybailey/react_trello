var React = require("react");
var Card = require('./card');

var List = function(props) {
  var cards = [];
  for (var i=0; i<props.cards.length; i++) {
    cards.push(<Card text={props.cards[i]} 
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

module.exports = List;