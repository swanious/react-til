import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';

const App = () => {
  return (
    <div className="App">
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
