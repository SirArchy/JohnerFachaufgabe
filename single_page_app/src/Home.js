import React, { useState } from 'react';

function Home() {
  const [isComponentVisible, setComponentVisible] = useState(false);

  const toggleComponent = () => {
    setComponentVisible(!isComponentVisible);
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={toggleComponent}>Toggle Component</button>
      {isComponentVisible && <SomeComponent />}
    </div>
  );
}

function SomeComponent() {
  return (
    <div>
      <p>This is a conditional component.</p>
    </div>
  );
}

export default Home;
