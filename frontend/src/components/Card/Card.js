import './Card.css'

function Card(props) {
    return (
      <button className="card" onClick={() => props.setSelectedCountry(props.country)}>
        <div className="card-top">
          <img src={props.country.flag} alt={props.country.name}/>
        </div>
        <div className="card-bottom">
          <h2 className='card-title'>{props.country.name}</h2>
          <div>
              <div><span className='card-attribute'>Population: </span><span className='card-attribute-value'>{props.country.population}</span></div>
              <div><span className='card-attribute'>Region: </span><span className='card-attribute-value'>{props.country.region}</span></div>
              <div><span className='card-attribute'>Capital: </span><span className='card-attribute-value'>{props.country.capital}</span></div>
          </div>
        </div>
        
      </button>
    );
}
export default Card;