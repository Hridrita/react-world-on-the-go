import React, { use, useState } from 'react';
import Country from './Country';
import './countries.css';

const countries = ({countriesPromise}) => {

    const [visitedFlag, setVisitedFlag] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) =>{
        console.log('clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) =>{
        console.log('flag added', flag);
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);

    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);

    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Country Visited:{visitedCountries.length} </h3>
            <h3>Total Flags Visited: {visitedFlag.length} </h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlag.map(flag => <img key={countries.cca3.cca3} src={flag}></img>)
                }
            </div>
            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlag={handleVisitedFlag} ></Country>)
            }
            </div>
        </div>
    );
};

export default countries;