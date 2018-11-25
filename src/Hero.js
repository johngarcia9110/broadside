import React, { Component } from 'react';

class Hero extends Component{
    render(){
        return(
            <div className="position-relative">

                <section className="section section-lg section-hero section-shaped pb-250">

                    <div className="shape shape-style-1 shape-primary">
                        <span className="span-150"></span>
                        <span className="span-50"></span>
                        <span className="span-50"></span>
                        <span className="span-75"></span>
                        <span className="span-100"></span>
                        <span className="span-75"></span>
                        <span className="span-50"></span>
                        <span className="span-100"></span>
                        <span className="span-50"></span>
                        <span className="span-100"></span>
                    </div>
                    <div className="container shape-container d-flex align-items-center py-lg">
                        <div className="col px-0">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-12 text-center">
                                        <h2 className="font-weight-bold display-3 text-white">Agency level online marketing and web development with a personal touch.</h2>
                                        <div className="mt-5">
                                            <span className="alert alert-danger" role="alert">
                                                <span className="alert-inner--icon"><i className="fas fa-box-full"></i></span>
                                                Currently not accepting new clients
                                            </span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                            <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </section>
            </div>
        )
    }
}

export default Hero;