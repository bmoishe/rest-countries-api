import './Cards.css'
import Card from '../Card'
function Cards(props) {
  function renderCards() {
    return props.countries.map( (country, index) => {
      return <div key={index}><Card country={country}/></div>
    })
  }
  return (
    <div className="cards">
      {renderCards()}
    </div>
  );
}
export default Cards;