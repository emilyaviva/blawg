import React from 'react';
import Header from './header.jsx';
import Main from './main.jsx';

const App = React.createClass({

  render() {
    return (
      <div>
        <Header />
        <Main appTitle="Hello World" />
      </div>
    );
  }

});

export default App;
