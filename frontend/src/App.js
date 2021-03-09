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
    console.log('error')
  }
}, [])

  

  function renderCards() {
    if(!isLoaded){
      return <div className='app-cards-loading'><LoadingSpinner/></div>
    }
    return countries.map( (country, index) => {
      return <div key={index}><Card setSelectedCountry={setSelectedCountry} country={country}/></div>
    })
  }
  console.log(selectedCountry)

  return (
    <div className="App">
      {/* header */}
      <Header/>
      {
        selectedCountry ?
        <div className='app-contry-view'>
          <Country setIsLoaded={setIsLoaded} setError={setError} setSelectedCountry={setSelectedCountry} country={selectedCountry}/>
        </div>:
     

      <div className='app-selection-view'>
        <div className='app-navigation'>
          {/* search bar */}
          <SearchBar isLoaded={isLoaded} setIsLoaded={setIsLoaded} error={error} setError={setError} setCountries={setCountries}/>
          {/* filter */}
          <Filter isLoaded={isLoaded} setIsLoaded={setIsLoaded} setError={setError} setCountries={setCountries}/>
        </div>
        {/* Cards - Array of Cards */}
        <div className='app-cards'>
          {renderCards()}
        </div>
      </div>
       }
    </div>
  );
}

export default App;
