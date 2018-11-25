import React, { Component } from 'react';
import Header from './Header.js';
import Hero from './Hero.js';
import Footer from './Footer.js';
import Services from './Services.js';
import ContactModal from './ContactModal.js';
import About from './About.js';
import ContactCTA from './Contact-CTA.js';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header toggleContact={this.toggleContactModal}></Header>
        <main>
          <Hero></Hero>
          <Services></Services>
            <About></About>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
