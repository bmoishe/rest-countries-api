import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import './App.css';
const countries = [
  'country',
  'country2',
  'country3',
  'country4',
  'country5',
]
function App() {
  return (
    <div className="App">
      {/* header */}
      <Header/>
      {/* search bar */}
      <SearchBar/>
      {/* filter */}
      <Filter/>
      {/* Cards - Array of Cards */}
      <Cards countries={countries}/>
    </div>
  );
}

export default App;
