import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {

    const [services, setService] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    // console.log(services)
    return (
        <div id="services" className="container">
           <div className="row">
           <h1 className="service-title my-5">Our Services</h1>
            <div className="services-container">


                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}>

                    </Service>)
                }
            </div>
           </div>
        </div>
    );
};

export default Services;