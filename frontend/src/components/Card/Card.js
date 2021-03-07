import './Card.css'

function Card(props) {
  return (
    <div className="card">
      <div className="card-top">
        <img src={props.country} alt={props.country}/>
      </div>
      <div className="card-bottom">
        <h2 className='card-title'>{props.country}</h2>
        <div>
            <div><span className='card-attribute'>Population: </span><span className='card-attribute-value'>{props.country}</span></div>
            <div><span className='card-attribute'>Region: </span><span className='card-attribute-value'>{props.country}</span></div>
            <div><span className='card-attribute'>Capital: </span><span className='card-attribute-value'>{props.country}</span></div>
        </div>
      </div>
      
    </div>
  );
}
export default Card;