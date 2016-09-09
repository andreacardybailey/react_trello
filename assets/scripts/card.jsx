var React = require("react");

var Card = function(props) {
  return (
    <li className="card">
      {props.text}
    </li>
  );
};

module.exports = Card;