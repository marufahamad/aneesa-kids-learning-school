import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Supports from '../Supports/Supports'

const Home = () => {
    const [services, setServices] = useState([]);

    const newServices = services.splice(0, 4);

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="background-services  mt-3 py-2">
            <Supports></Supports>
            <h1 className="text-white">OUR SERVICES</h1>
            {
                newServices.map(service => <Service service={service}></Service>)
            }
        </div >
    );
};

export default Home;