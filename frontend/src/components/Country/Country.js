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
        return <div className="country-borderNation"key={index} onClick={() => getBorderCountry(bCountry)}>{bCountry}</div>
      })
    }
    console.log(props.country)
    
    return (
      <div className="country">
        <div className="country-backBtn" onClick={() => props.setSelectedCountry(null)}>Back</div>
        <div className="country-content">
          <div className="country-left">
            <img className="country-image" src={props.country.flag} alt={props.country.name}/>
          </div>
          <div className="country-right">
            <h2 className='country-title'>{props.country.name}</h2>
            <div className='country-details-container'>

            
            <div className="country-details">
                <p><span className='country-attribute'>Native Name: </span><span className='country-attribute-value'>{props.country.nativeName}</span></p>
                <p><span className='country-attribute'>Population: </span><span className='country-attribute-value'>{props.country.population}</span></p>
                <p><span className='country-attribute'>Region: </span><span className='country-attribute-value'>{props.country.region}</span></p>
                <p><span className='country-attribute'>Sub Region: </span><span className='country-attribute-value'>{props.country.subregion}</span></p>
                <p><span className='country-attribute'>Capital: </span><span className='country-attribute-value'>{props.country.capital}</span></p>
            </div>
            <div className="country-details">
            <p><span className='country-attribute'>Top Level Domain: </span><span className='country-attribute-value'>{props.country.topLevelDomain[0]}</span></p>
                <p><span className='country-attribute'>Currencies: </span><span className='country-attribute-value'>{props.country.currencies[0].name}</span></p>
                <p><span className='country-attribute'>languages: </span><span className='country-attribute-value'>{props.country.languages[0].name}</span></p>
            </div>
            </div>
            <div className="country-borderNations"><span className='country-attribute'>Border Countries: </span>{renderBorderNations()}</div>
          </div>
        </div>
      </div>
    );
}
export default Country;