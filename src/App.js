import React, { Component } from 'react';
import { Welcome } from './Welcome';
import style from './dist/styles/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entered: false
    };
  }

  enter = () => {
    this.setState({ entered: !this.state.entered });
  };

  render() {
    const { entered } = this.state;
    return (
      <div>
        <header className="header">
          <h1 />
        </header>
        <Welcome entered={entered} enter={this.enter} />
      </div>
    );
  }
}

export default App;
