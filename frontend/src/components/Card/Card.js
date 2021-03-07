import './Card'

function Card(props) {
  return (
    <div className="card">
      <div className="card-top">
        <img src={props.country} alt={props.country}/>
      </div>
      <div className="card-bottom">
        <h2 className='card-title'>{props.country}</h2>
        <div>
          <ul>
            <li><span className='card-attribute'>Population: </span><p className='card-attribute-value'>{props.country}</p></li>
            <li><span className='card-attribute'>Region: </span><p className='card-attribute-value'>{props.country}</p></li>
            <li><span className='card-attribute'>Capital: </span><p className='card-attribute-value'>{props.country}</p></li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
export default Card;