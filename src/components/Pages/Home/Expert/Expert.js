import React from 'react';
import './Expert.css'
const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className="g-5 col-sm-12 col-md-6 col-lg-4">

            <div className="card expert-card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body expert-details">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    );
};

export default Expert;