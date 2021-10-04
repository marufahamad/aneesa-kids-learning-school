import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark text-light">
            <div className="row">
                <div className="col-md-4 pt-3 my-auto">
                    <h1>Aneesa</h1>
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook m-2"></i></a>
                    <a href="https://twitter.com/"><i className="fab fa-twitter m-2"></i></a>


                </div>
                <div className="col-md-4 my-auto">
                    <ul className="d-flex ">
                        <Link to="/home" className="Nav-items">
                            <li>Home</li>
                        </Link>
                        <Link to="/services" className="Nav-items">
                            <li>Services</li>
                        </Link>
                        <Link to="/support" className="Nav-items">
                            <li>Our Supports</li>
                        </Link>
                        <Link to="/about" className="Nav-items">
                            <li>About us</li>
                        </Link>
                    </ul>
                </div>
                <div className="col-md-4 my-auto text-light">
                    <h3>Keep in Touch</h3>
                    <input type="text" placeholder="provide your email" />
                    <Button className="bg-secondary text-light">Submit</Button>
                </div>
            </div>
            <p><small> <i className="far fa-copyright"></i> Copyright Act 2020-2022 applicable</small></p>
        </div>

    );
};

export default Footer;