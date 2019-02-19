import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <header className="header-global">
                <nav id="navbar-main"
                     className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
                    <div className="container">
                        <a className="navbar-brand mr-lg-5" href="./index.html">
                            <img src="./images/logo-dark.svg" alt="Broadside Technology Logo"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse" id="navbar_global">
                            <div className="navbar-collapse-header">
                                <div className="row">
                                    <div className="col-6 collapse-brand">
                                        <a href="./index.html">
                                            <img src="./images/BroadsideLogo-new.svg" alt="Broadside Technology Logo"/>
                                        </a>
                                    </div>
                                    <div className="col-6 collapse-close">
                                        <button type="button" className="navbar-toggler" data-toggle="collapse"
                                                data-target="#navbar_global" aria-controls="navbar_global"
                                                aria-expanded="false" aria-label="Toggle navigation">
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                                <li className="nav-item dropdown">
                                    <a href="#about" className="nav-link">
                                        <i className="ni ni-ui-04 d-lg-none"></i>
                                        <span className="nav-link-inner--text">About</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                                <li className="nav-item d-none d-lg-block ml-lg-4">
                                    <button type="button" onClick={this.props.toggleContactModal} className="btn btn-block btn-default" data-toggle="modal" data-target="modal-contact">Get In Touch</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;