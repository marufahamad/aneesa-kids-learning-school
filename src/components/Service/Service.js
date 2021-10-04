import React from 'react';
import './Service.css'

const Service = (props) => {
    console.log(props.service)
    const { Name, img, ageLimit, duration, regFee, description } = props.service;

    return (
        <div className="d-flex border border-primary gap-2 my-2 w-75 mx-auto center rounded shadow custom-bg">
            <div >
                <img className="service-image m-2" src={img} alt="" />
            </div>
            <div className="m-3 text-start text-primary my-auto custom-bg rounded">
                <h4>{Name}</h4>
                <p>Age Limit: {ageLimit}</p>
                <p>Duration: {duration}</p>
                <p>Registration Fee: {regFee}</p>
            </div>
            <div className="w-50 p-2 my-auto text-start">
                <h6>{description}</h6>
            </div>
        </div>
    );
};

export default Service;