import './Country.css'

function Country(props) {

    function getBorderCountry(bCountry) {
      console.log(bCountry)
      props.setIsLoaded(false);
      console.log('sending request')
      fetch(`https://restcountries.eu/rest/v2/alpha/${bCountry}`)
        .then(res => res.json())
        .then(
          (data) => {
            console.log(data)
            if(!data.status) {
              props.setSelectedCountry(data);
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

    function renderBorderNations() {
      return props.country.borders.map((bCountry, index) => {
        return <div key={index} onClick={() => getBorderCountry(bCountry)}>{bCountry}</div>
      })
    }
    
    return (
      <div className="card">
        <div onClick={() => props.setSelectedCountry(null)}>Back</div>
        {renderBorderNations()}
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
        
      </div>
    );
}
export default Country;