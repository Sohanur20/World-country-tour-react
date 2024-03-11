
import { useState } from 'react'
import { useEffect } from 'react';
import Country from '../country/Country';
import './Countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))


    }, []);


    const handleVisitedCountry = country => {
        console.log('add this to your visited country')
      
    }

    return (

        <div>
<div>
    <h3>countries  : {countries.length}</h3>
    <h4>visited countries</h4>
    <ul>

    </ul>
</div>
            <div className='countries-container'>


                {
                    countries.map(country => <Country country={country} handleVisitedCountry={handleVisitedCountry} key={country.cca3}></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;