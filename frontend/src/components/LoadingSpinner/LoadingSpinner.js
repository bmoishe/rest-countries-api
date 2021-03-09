import './LoadingSpinner.css'
function LoadingSpinner() {
    return (
      <div className="loading-spinner">
        <div className="loading-spinner__dial"></div>
        <div className="loading-spinner__nub"></div>
      </div>
    );
}
export default LoadingSpinner;