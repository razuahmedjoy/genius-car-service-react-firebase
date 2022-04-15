import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id,name,price,description,img} = service;

    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate("/services/"+id)
        
    }
    return (
        <div className="service">
            <img src={img} className="w-100" alt="" />
           <div className="p-1">
           <h4>{name}</h4>
            <p>Price : {price}</p>
            <p style={{'minHeight': '100px'}}><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetail(id)} className="btn btn-primary btn-sm">Book Now</button>
           </div>
        </div>
    );
};

export default Service;