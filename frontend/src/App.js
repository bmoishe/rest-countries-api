import {useEffect, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import Card from './components/Card'
import './App.css';

function App() {
  const [countries, setCountries] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
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
      return <div className='app-cards-loading'>Loading</div>
    }
    return countries.map( (country, index) => {
      return <div key={index}><Card country={country}/></div>
    })
  }

  return (
    <div className="App">
      {/* header */}
      <Header/>
      <div className='app-navigation'>

      {/* search bar */}
      <SearchBar/>
      {/* filter */}
      <Filter/>
      </div>
      {/* Cards - Array of Cards */}
      <div className='app-cards'>
      {renderCards()}
      </div>
      {/* <Card countries={countries}/> */}
    </div>
  );
}

export default App;
