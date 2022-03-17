import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name,population,region, area, flags} = props.country
    return (
            <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <p>Country Population: {population}</p>
            <p>Region: {region}</p>
            <p><small>Area: {area}</small></p>
            <img src={flags.png} alt="" />
            </div>
    );
};

export default Country; 