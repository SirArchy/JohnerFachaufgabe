import React from 'react';

function List() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
