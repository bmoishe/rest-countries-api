import { useState } from 'react'
import search from '../../images/search-outline.svg'
import './SearchBar.css'

function SearchBar(props) {
  const [requestedCountry, setRequestedCountry] = useState([''])
  function handleChange(e) {
    setRequestedCountry(e.target.value)
  }

  function handleRequest() {
    fetchCountry()
    console.log('changed')
  }

  function fetchCountry() {
    props.setIsLoaded(false);
    console.log('sending request')
    fetch(`https://restcountries.eu/rest/v2/name/${requestedCountry}`)
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data)
          if(!data.status) {
            props.setCountries(data);
            props.setIsLoaded(true);
          } else {
            props.setError('Enter a valid country');
          }
        },
          (err) => {
            props.setIsLoaded(true);
            props.setError(err);
          }
      )
  }

  function renderError() {
    if(props.error=== 'Enter a valid country') {
      return <div className='app-error'>Enter a valid country</div>
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleRequest()
    }
  }
  return (
    <div className="searchBar-container">

    <div className={`searchBar ${props.isDarkMode && "dark-mode-theme-component"}`}>
      <button className='searchBar-button' onKeyDown={handleKeyDown}><img onClick={handleRequest} src={search} alt="search"/></button>
      <input onChange={(e) => handleChange(e)}placeholder='Search for a country...'/>
      
    </div>
    {renderError()}
    </div>
  );
}

export default SearchBar;