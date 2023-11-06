import React, { useState } from 'react';
import List from './List';

function Projects() {
    const [showList, setShowList] = useState(false);
  return (
    <div>
      <h1>Projects Page</h1>
      <button onClick={() => setShowList(!showList)}>
        {showList ? 'Hide List' : 'Show List'}
      </button>
      {showList && <List />}
    </div>
  );
}

export default Projects;
