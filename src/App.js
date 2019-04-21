import React, { Component } from 'react';
import Header from './Header.js';
import Hero from './Hero.js';
import Footer from './Footer.js';
import Services from './Services.js';
import ContactModal from './ContactModal.js';
import Clients from './Clients.js';
import About from './About.js';
import ContactCTA from './Contact-CTA.js';

class App extends Component {
    state = {
        contactModalOpen : false,
    };

    toggleContactModal = () => {
        console.log('testing');
        this.setState(()=> ({
            contactModalOpen : !this.state.contactModalOpen,
        }))
    };

  render() {
    return (
      <div className="App">
        <Header toggleContactModal={this.toggleContactModal} ></Header>
        <main>
          <Hero></Hero>
          <Services></Services>
            <Clients/>
            <About></About>
        </main>
        <Footer contactModalOpen={this.state.contactModalOpen} toggleContactModal={this.toggleContactModal}></Footer>
      </div>
    );
  }
}

export default App;
