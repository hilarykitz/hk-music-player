import React, { Component } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Welcome } from './Welcome';
import { MyMusic } from './MyMusic';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import style from './dist/styles/main.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <main className="container">
            <Route exact path="/" component={Welcome} />
            <Route path="/myMusic" component={MyMusic} />
            <Footer />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
