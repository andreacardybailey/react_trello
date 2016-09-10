var React = require("react");
var ListContainer = require('./listContainer');

var Board = function(props) {
  var listContainers = [];
  for (var i=0; i<props.boardState.lists.length; i++) {
    listContainers.push(<ListContainer key={i} 
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

module.exports = Board;