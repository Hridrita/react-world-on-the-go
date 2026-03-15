import React, { use, useState } from 'react';
import Country from './Country';
import './countries.css';

const countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) =>{
        console.log('clicked', country);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);

    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Country Visited: </h3>
            <div  className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
            }
            </div>
        </div>
    );
};

export default countries;