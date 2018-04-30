import React, { Component } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import TrackView from './TrackView';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import style from './dist/styles/main.css';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="container">
          <Header />
          <Route exact path="/" component={TrackView} />
          <Route path="/player" component={TrackView} />
          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
