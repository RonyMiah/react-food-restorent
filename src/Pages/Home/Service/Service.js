import React from 'react';
import './Service.css';



const Service = ({service}) => {
    
    const {name,picture,phone,balance,about}= service
    return (
        <div className="service">
            
            
            <img width="50%" src={picture} alt="" />
            <h2>name{name}</h2>
            <small>{about}</small>
        </div>
    );
};

export default Service;