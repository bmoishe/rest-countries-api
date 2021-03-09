import './Filter.css'
import {setState} from 'react'

import chevronDown from '../../images/chevron-down-outline.svg'

function Filter(props) {
  function fetchCountries(region) {
      props.setIsLoaded(false);
      console.log('sending request')
      fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(res => res.json())
        .then(
          (data) => {
            props.setCountries(data);
            props.setIsLoaded(true);
          },
            (err) => {
              props.setIsLoaded(true);
              props.setError(err);
            }
          )
  }

  function handleClick(e) {
    fetchCountries(e.target.innerHTML)
  }

  return (
    <div className="filter">
       {/* <option className='filter-button'></option> */}
      <div className='filter-cta'>
        <button className={`filter-button`} >Filter By Region <img alt='chevron-down' src={chevronDown}/></button>
      </div>
      <div className='filter-content'>
        <button className='filter-options'  onClick={(e) => handleClick(e)}>Africa</button>
        <button className='filter-options'  onClick={(e) => handleClick(e)}>Americas</button>
        <button  className='filter-options' onClick={(e) => handleClick(e)}>Asia</button>
        <button className='filter-options'  onClick={(e) => handleClick(e)}>Europe</button>
        <button className='filter-options'  onClick={(e) => handleClick(e)}>Oceania</button>
      </div>
    </div>
  );
}
export default Filter;