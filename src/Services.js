import React, { Component } from 'react';

class Services extends Component {
    render(){
        return(
            <section className="section section-lg section-shaped pt-lg-0 mt--70">
                <div className="container">
                    {/*<div className="row mb-4">*/}
                        {/*<div className="col-12">*/}
                            {/*<h1 className="text-center display-3">Services*/}
                            {/*<span className="text-success text-center">Everything you need for your business online</span></h1>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <img className="icon-img" src="./images/Money-Cloud-1.png" alt="Money Cloud"/>
                                    <h2 className="display-4 text-center">Internet Marketing</h2>
                                    <p className="lead text-center">Get your brand exposure online. Attract new customers from search engines and social media.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <img className="icon-img" src="./images/Devices-1.png" alt="Devices"/>
                                    <h2 className="display-4 text-center">Web Development</h2>
                                    <p className="lead text-center">Get your website in shape and up to date. Everything from feature development to A/B Testing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <img className="icon-img" src="./images/Maintenance-1.png" alt="Maintenance"/>
                                    <h2 className="display-4 text-center">Web Maintenance</h2>
                                    <p className="lead text-center">Don't worry about falling behind. Keep your website secure, up to date, and running smoothly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-100 justify-content-center">
                        <div className="col-12 text-center pb-5">
                            <h3>Clients who trust Broadside Technology</h3>
                        </div>
                        <div className="col-lg-4">
                            <img src="https://www.commercial-carpetcushion.com/files/home/tredmor-logo.svg" alt="Tred-MOR logo"/>
                        </div>
                        <div className="col-lg-4">
                            <img src="https://www.spayaz.com/wp-content/uploads/2017/03/SNCBanner-Optimized.png" alt="Spayaz logo"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;