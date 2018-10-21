import React, { Component } from 'react';
import Header from './Header.js';
import Hero from './Hero.js';
import Footer from './Footer.js';
import Services from './Services.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <main>
          <Hero></Hero>
          <Services></Services>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
