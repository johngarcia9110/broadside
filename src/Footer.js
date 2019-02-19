import React, { Component } from 'react';
import ContactCTA from './Contact-CTA';
import ContactModal from './ContactModal';

class Footer extends Component{
    render(){
        return(
            <footer className="footer has-cards">
                <ContactCTA toggleContact={this.props.toggleContactModal}></ContactCTA>
                {this.props.contactModalOpen &&(
                    <ContactModal toggleContact={this.props.toggleContactModal}></ContactModal>
                )}
                <div className="container">
                    <hr/>
                        <div className="row align-items-center justify-content-md-between">
                            <div className="col-md-6">
                                <div className="copyright">
                                    &copy; 2019 Broadside Technology LLC
                                </div>
                            </div>
                            <div className="col-md-6">
                                {/*<ul className="nav nav-footer justify-content-end">*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a href="https://www.creative-tim.com" className="nav-link" target="_blank">Creative*/}
                                            {/*Tim</a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a href="https://www.creative-tim.com/presentation" className="nav-link"*/}
                                           {/*target="_blank">About Us</a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a href="http://blog.creative-tim.com" className="nav-link"*/}
                                           {/*target="_blank">Blog</a>*/}
                                    {/*</li>*/}
                                    {/*<li className="nav-item">*/}
                                        {/*<a href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"*/}
                                           {/*className="nav-link" target="_blank">MIT License</a>*/}
                                    {/*</li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                </div>
            </footer>
        )
    }
}

export default Footer;