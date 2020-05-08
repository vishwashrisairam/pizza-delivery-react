import React from 'react';
import './../index.css';

const Footer = () =>{

    return (
        <footer className="page-footer font-small blue pt-4 footer bg-dark">
            <div className="container-fluid text-center text-md-left bg-dark text-white">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">About this store!</h5>
                        <p>Some text</p>

                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Our Services</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">About the Store</a></li>
                            <li><a href="#!">Careers</a></li>
                            <li><a href="#!">Investor Relations</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Help</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Customer Service</a></li>
                            <li><a href="#!">Gift Cards</a></li>
                            <li><a href="#!">Store Info</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="footer-copyright text-center py-3">
                © No Copyright:
            </div>

        </footer>
    );
}

export default Footer;