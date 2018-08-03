import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I am in the Home component</div>
      <button onClick={() => console.log("Pressed")}>Press Me</button>
    </div>
  );
}

export default Home;