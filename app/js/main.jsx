import React from 'react';

const Main = React.createClass({

  render() {
    return (
      <main>
        <h2>{this.props.appTitle}</h2>
      </main>
    );
  }

});

export default Main;
