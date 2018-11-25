import React, { Component } from 'react';

class ContactCTA extends Component{
    render(){
        return(
            <section className="section section-lg">
                <div className="container">
                    <div className="card bg-gradient-warning shadow-lg border-0">
                        <div className="p-5">
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <h3 className="text-white">Let's do something awesome!</h3>
                                    <p className="lead text-white mt-3">Need to get your marketing up to date? Does your website need a refresh? Are you looking for someone to keep your website running smoothly?</p>
                                </div>
                                <div className="col-lg-3 ml-lg-auto">
                                    <button type="button" onClick={this.props.toggleContact} className="btn btn-lg btn-block btn-white" data-toggle="modal" data-target="modal-contact">Get In Touch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactCTA;