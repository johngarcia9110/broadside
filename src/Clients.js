import React, { Component } from 'react';

class Clients extends Component {
    render(){
        return(
            <section id="clients" className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center pb-5 pt-4">
                        <h3>Clients who trust us:</h3>
                    </div>
                </div>
                <div className="row client-wrap">
                    <div className="col-lg-4 mb-4">
                        <img className="clientIcon" src="https://www.commercial-carpetcushion.com/files/home/tredmor-logo.svg" alt="Tred-MOR logo"/>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <img className="clientIcon" src="https://www.spayaz.com/wp-content/uploads/2017/03/SNCBanner-Optimized.png" alt="Spayaz logo"/>
                    </div>
                    <div className="col-lg-4">
                        <img className="clientIcon" src="./images/clients/nywwsc_logo.png" alt="New York Wine & Spirits Competition logo"/>
                    </div>
                </div>
            </section>
        )
    }

}

export default Clients;