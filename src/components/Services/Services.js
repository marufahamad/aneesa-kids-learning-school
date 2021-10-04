import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="background-services  mt-3 py-2">
            <h2 className="text-white">OUR SERVICES</h2>
            {
                services.map(service => <Service service={service}></Service>)
            }
        </div>
    );
};

export default Services;