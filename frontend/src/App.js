import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import Card from './components/Card'
import './App.css';
const countries = [
  'country',
  'country2',
  'country3',
  'country4',
  'country5',
  'country6',
  'country7',
  'country8',
]
function App() {
  function renderCards() {
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
