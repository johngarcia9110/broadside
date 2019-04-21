import React, { Component } from 'react';

class Hero extends Component{
    render(){
        return(
            <div className="position-relative">

                <section className="section section-lg section-hero section-shaped pb-250">

                    <div className="shape shape-image">
                    </div>
                    <div className="container shape-container d-flex align-items-center py-lg">
                        <div className="col px-0">
                            <div className="row align-items-center">
                                <div className="col-lg-8 text-left">
                                        <h2 className="font-weight-bold display-3">Performance focused marketing and web development</h2>
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