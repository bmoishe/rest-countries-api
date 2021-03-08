import './Filter.css'

function Filter(props) {
  function fetchCountries(region) {
      props.setIsLoaded(false);
      console.log('sending request')
      fetch(`https://restcountries.eu/rest/v2/region/${region}`)
        .then(res => res.json())
        .then(
          (data) => {
            props.setCountries(data);
            props.setIsLoaded(true);
          },
            (err) => {
              props.setIsLoaded(true);
              props.setError(err);
            }
          )
  }

  function handleClick(e) {
    fetchCountries(e.target.innerHTML)
  }
  return (
    <div className="filter">
      <div>Filter By Region</div>
      <div onClick={(e) => handleClick(e)}>Africa</div>
      <div onClick={(e) => handleClick(e)}>Americas</div>
      <div onClick={(e) => handleClick(e)}>Asia</div>
      <div onClick={(e) => handleClick(e)}>Europe</div>
      <div onClick={(e) => handleClick(e)}>Oceania</div>
    </div>
  );
}
export default Filter;