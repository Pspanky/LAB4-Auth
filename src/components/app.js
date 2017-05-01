import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../containers/counter';
import Controls from '../containers/controls';

const App = (props) => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul />
      <Counter />
      <Controls />
    </nav>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
