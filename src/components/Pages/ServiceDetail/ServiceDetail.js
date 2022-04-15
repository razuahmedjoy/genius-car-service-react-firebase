import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    
    // const params = useParams()
    // const {serviceId} = params;
    
    const {serviceId} = useParams();
    console.log(serviceId)
    return (
        <div>
            <h2>Welcome to Details {serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;