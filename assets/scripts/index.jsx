var React = require('react');
var ReactDOM = require('react-dom');

 // the card component
 var Card = function() {
  var toDoItem = 'do laundry';
  return (
    <li className="card">
        {toDoItem}
    </li>
  );
 };

  //the List component should contain a number of Cards.
 var List = function() {
  var listTitle = "To Do:"
  return (
    <div className="list">
      <h2>{listTitle}</h2>
      <ul className="cards">
          <Card />
          <Card />
      </ul>
    </div>
  );
 };

 //The Board component should consist of a number of List components
 var Board = function() {
  var boardTitle = "Things to get done"
  return (
    <div className="board clearfix">
      <h1>{boardTitle}</h1>
        <List />
        <List />
        <List />
    </div>
  );
 };

 document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});



