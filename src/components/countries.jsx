import React, { use } from 'react';
import Country from './Country';

const countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);

    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default countries;