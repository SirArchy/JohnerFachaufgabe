import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import List from './components/List';

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <button onClick={() => setShowList(!showList)}>
        {showList ? 'Hide List' : 'Show List'}
      </button>
      <Home />
      <About />
      {showList && <List />}
    </div>
  );
}

export default App;
