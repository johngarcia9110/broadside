import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <header className="header-global">
                <nav id="navbar-main"
                     className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
                    <div className="container">
                        <a className="navbar-brand mr-lg-5" href="./index.html">
                            <img src="./images/svg/logo-final.svg" alt="Broadside Technology Logo"/>
                        </a>
                        <button type="button" onClick={this.props.toggleContactModal} className="btn btn-default" data-toggle="modal" data-target="modal-contact">Get In Touch</button>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;