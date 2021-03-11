import './Filter.css'
import { useState } from 'react'

import chevronDown from '../../images/chevron-down-outline.svg'

function Filter(props) {

  const [showContent, setShowContent] = useState(false)
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

  function showDropdown() {
    if(!showContent) {
      setShowContent(true)
    } else {
      setShowContent(false) 
    }
  }

  return (
    <div className="filter">
      <div className={`filter-cta ${props.isDarkMode && "dark-mode-theme-component"}`} onClick={() => showDropdown()} >
        <button className={`filter-button`} >Filter By Region <img alt='chevron-down' src={chevronDown}/></button>
      </div>
      <div className={`filter-content ${showContent ?'filter-content-show' :''} ${props.isDarkMode && "dark-mode-theme-component"}`}>
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