import React, { Component } from 'react';

class About extends Component{
    render(){
        return(
            <section id="about" className="section bg-secondary">
                <div className="container">
                    <div className="row row-grid align-items-center">
                        <div className="col-md-6">
                            <div className="card bg-default shadow border-0">
                                <img src="https://images.pexels.com/photos/313765/pexels-photo-313765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="card-img-top"/>
                                    <blockquote className="card-blockquote">
                                        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 583 95" className="svg-bg">
                                            <polygon points="0,52 583,95 0,95" className="fill-default"></polygon>
                                            <polygon points="0,42 583,95 683,0 0,95" opacity=".2"
                                                     className="fill-default"></polygon>
                                        </svg>
                                        <h4 className="display-3 font-weight-bold text-white">Based In San Francisco</h4>
                                        <p className="lead text-italic text-white">Created, tested and proven marketing and development techniques in the Bay Area.</p>
                                    </blockquote>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pl-md-5">
                                <h3 className="font-weight-bold">About</h3>
                                <p className="lead">Broadside Technology is the result of over 4 years of agency-level marketing and development experience in the Bay Area.</p>
                                <p>Historically the term "broadside" refers to a nearly simultaneous firing of all the guns from one side of a warship.</p>
                                <p>We like to think of ourselves as your marketing and development "warship", we come into every project with everything we've got.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default About;