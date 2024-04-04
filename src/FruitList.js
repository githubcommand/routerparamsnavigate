// FruitList.js
import React from 'react';
import { Link } from 'react-router-dom';

function FruitList() {
  const fruits = ['mango', 'apple', 'orange', 'grapes', 'banana'];

  return (
    <div>
      <h2>Click on a fruit:</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            <Link to={`/fruits/${fruit}`}>{fruit}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
