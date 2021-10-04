import React from 'react';
import './AboutUs.css'
import logo from '../../images/android-chrome-512x512.png'

const AboutUS = () => {
    return (
        <div className="new-background mt-3 py-2">
            <h1 className="text-white ">ABOUT US</h1>
            <div className="row">
                <div className="col-md-3">
                    <img className="w-50" src={logo} alt="" />
                </div>
                <div className="col-md-4 p-3">
                    <h3>Our Mission:</h3>
                    <p>Aneesa aspires to provide innovative programs that serve and support children and families through strong partnerships. We are committed to providing the highest quality early childhood program for children, families and staff.</p>
                </div>
                <div className="col-md-5 p-3">
                    <h3>Our Philosophy:</h3>
                    <p>Our primary goal is to provide a safe, loving, homelike atmosphere that will foster the social, and cognitive development of each child in our care.</p>
                    <p>To meet these goals, we have developed a strong program based on our belief that children learn by doing. Our Administrative and Teaching Staff have developed specific objectives for each of our programs.</p>
                </div>
            </div>


        </div>
    );
};

export default AboutUS;