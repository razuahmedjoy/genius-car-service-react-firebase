import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    // const params = useParams()
    // const {serviceId} = params;
    
    const {serviceId} = useParams();
    console.log(serviceId)
    return (
        <div>
            <h2>Welcome to Details {serviceId}</h2>
            <Link to="/checkout" className="btn btn-success">Proceed Checkout</Link>
        </div>
    );
};

export default ServiceDetail;