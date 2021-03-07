import './Card'

function Card(props) {
  return (
    <div className="card">
      {props.country}
    </div>
  );
}
export default Card;