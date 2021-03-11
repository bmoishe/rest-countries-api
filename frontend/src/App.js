import {useEffect, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import Card from './components/Card'
import Country from './components/Country'
import LoadingSpinner from './components/LoadingSpinner'
import './App.css';

function App() {
  const [countries, setCountries] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [error, setError] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)

  function fetchCountries() {
    if(!isLoaded) {
      setIsLoaded(false);
      console.log('sending request')
      fetch(`https://restcountries.eu/rest/v2/all`)
        .then(res => res.json())
        .then(
          (data) => {
            setCountries(data);
            setIsLoaded(true);
          },
            (err) => {
              setIsLoaded(true);
              setError(err);
            }
          )
    }
  }

useEffect(() => {
  fetchCountries()
  return () => {
    console.log('countries fetched')
  }
}, [])

  

  function renderCards() {
    if(!isLoaded){
      return <div className='app-cards-loading'><LoadingSpinner/></div>
    }
    return countries.map( (country, index) => {
      return <div className='app-card' key={index}><Card isDarkMode={isDarkMode} setSelectedCountry={setSelectedCountry} country={country}/></div>
    })
  }

  return (
    <div className={`App ${isDarkMode && "dark-mode-theme"}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      {
        selectedCountry ?
        <div className='app-contry-view'>
          <Country isDarkMode={isDarkMode} setIsLoaded={setIsLoaded} setError={setError} setSelectedCountry={setSelectedCountry} country={selectedCountry}/>
        </div>:
      <div className='app-selection-view'>
        <div className='app-navigation'>
          <SearchBar isDarkMode={isDarkMode} isLoaded={isLoaded} setIsLoaded={setIsLoaded} error={error} setError={setError} setCountries={setCountries}/>
          <Filter isDarkMode={isDarkMode} isLoaded={isLoaded} setIsLoaded={setIsLoaded} setError={setError} setCountries={setCountries}/>
        </div>
        <div className='app-cards'>
          {renderCards()}
        </div>
      </div>
       }
    </div>
  );
}

export default App;
