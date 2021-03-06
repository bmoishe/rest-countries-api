import './Card.css'

function Card(props) {
    return (
      <div className={`card ${props.isDarkMode && "dark-mode-theme-component"}`} onClick={() => props.setSelectedCountry(props.country)}>
        <div className="card-top">
          <img src={props.country.flag} alt={props.country.name}/>
        </div>
        <div className="card-bottom">
          <h3 className='card-title'>{props.country.name}</h3>
          <div>
              <div><span className='card-attribute'>Population: </span><span className='card-attribute-value'>{props.country.population}</span></div>
              <div><span className='card-attribute'>Region: </span><span className='card-attribute-value'>{props.country.region}</span></div>
              <div><span className='card-attribute'>Capital: </span><span className='card-attribute-value'>{props.country.capital}</span></div>
          </div>
        </div>
      </div>
    );
}
export default Card;