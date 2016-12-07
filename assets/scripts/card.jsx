import React from 'react';

export default function Card(props) {
  return (
    <li className="card">
      {props.text}
    </li>
  );
};
