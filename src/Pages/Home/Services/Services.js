import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css'



const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
    fetch('./fakedata.json')
    .then(res => res.json())
    .then(data => setServices(data));
} , [])
    return (
        
       <div className="services-main p-5"> 
         <div className="nav-design">
         <Nav.Link to="/breakfast">Breakfast</Nav.Link>
         <Nav.Link to="/lanch">Lanch</Nav.Link>
         <Nav.Link to="/dinner">Dinner</Nav.Link>
         </div>

        <div className="service-container container mt-5">
          
          {
              services.map( service  =><Service
              key={service._id}
              service={service}
              ></Service>) 
          }
      </div>
       </div>
    );
};

export default Services;