import React, { Component } from 'react';


class ContactModal extends Component{
    state = {
        formFilled : false,
        formError : false
    };

    validateForm = (event) => {
        const name = document.querySelector('input[name="_name"]').value.length;
        const email = document.querySelector('input[name="_replyto"]').value.length;
        const service = document.querySelector('input[name="_service"]').value.length;
        const message = document.querySelector('textarea[name="_message"]').value.length;

        console.log(name);
        if(name < 5 || email < 5 || service < 5 || message < 5){
            event.preventDefault();
            this.setState(() => (
                {
                    formError : true
                }
            ))
        }else{
            this.setState(() => (
                {
                    formError : false
                }
            ))
        }


    }

    render(){
        return(
            <div className="modal fade show" id="modal-contact" tabIndex="-1" role="dialog" aria-labelledby="modal-form">
                <div className="modal-background" onClick={this.props.toggleContact}></div>
                <div className="modal-dialog modal- modal-dialog-centered modal-" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h6 className="modal-title" id="modal-title-default">Contact Broadside</h6>
                            <button type="button" className="close" onClick={this.props.toggleContact} aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body px-lg-5 py-lg-5 bg-secondary">
                            {
                                this.state.formError &&(
                                    <div className="alert alert-danger alert-dismissible fade show text-center" role="alert">
                                        <p className="alert-inner--text mb-0">Please fill out all the fields below before clicking "send".</p>
                                    </div>
                                )
                            }
                            <form action="https://formspree.io/johngarcia9110@gmail.com" role="form" method="POST">
                                <div className="form-group input-group-alternative">
                                    <input className="form-control" type="text" name="_name" placeholder="Your Name*"/>
                                </div>
                                <div className="form-group input-group-alternative">
                                    <input className="form-control" type="email" name="_replyto" placeholder="Your Email*"/>
                                </div>
                                <div className="form-group input-group-alternative">
                                    <input className="form-control" type="text" name="_service" placeholder="What service(s) are you looking for?*"/>
                                </div>
                                <div className="form-group input-group-alternative">
                                    <textarea name="_message" className="form-control" cols="30" rows="10" placeholder="Your Message*"></textarea>
                                </div>
                                <div className="text-right">
                                    <input className="btn btn-primary ml-auto d-inline-block" type="submit" value="Send" onClick={(e) => {this.validateForm(e)}}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactModal;