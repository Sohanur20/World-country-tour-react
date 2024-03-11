 /* eslint-disable react/prop-types */
import { useState } from 'react';
import './country.css'

const Country = ({country , handleVisitedCountry}) => {


    const {name,flags,region,population,area} = country;

    const [visited , setVisited] = useState(false)
    const handleVisited = () =>{
        setVisited(!visited)
    }

    const passWithParams = () =>handleVisitedCountry(country)

    return (
        <div className={`card ${visited && 'visited'}`}>
            <img src={flags.png} alt="" />
            <h2>name : {name.common} </h2>
            <h2>{region} </h2>
            <h2>population :{population} </h2>
            <h2> area : {area} </h2>
            <button onClick={passWithParams}>Make visit </button> <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button>
         
            {
                visited ? 'i have visited this country' : "i want to go "
            }

            
        </div>
    );
};

export default Country;