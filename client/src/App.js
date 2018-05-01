import React, { Component } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import MainView from './MainView';
import style from './dist/styles/main.css';

class App extends Component {
  render() {
    return (
      <main className="container">
        <Header />
        <MainView />
        <Footer />
      </main>
    );
  }
}

export default App;
