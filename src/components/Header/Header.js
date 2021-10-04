import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div className="header-background">
            <NavBar></NavBar>

            <div className="row header me-1">
                <div className="col-md-6">
                    <h1 className="header-name pt-3 text-danger">Aneesa - Kids Learning School</h1>
                </div><div className="col-md-6 my-auto background text-light">
                    <h2 className="text-warning">Joyful learning starts here!</h2>
                    <h3>Inspire a lifetime of learning and discovery with our free and fun educational program for children ages two to twelve.</h3>
                </div>


            </div>
        </div>
    );
};

export default Header;