import './Header.css'
import moonImg from '../../images/moon-outline.svg'
function Header(props) {
  function handleClick() {
    if(!props.isDarkMode) {
      props.setIsDarkMode(true)
    } else {
      props.setIsDarkMode(false)
    }
  }
  return (
    <header className={`header ${props.isDarkMode && "dark-mode-theme-component"}`}>
      <h1 className='header-title'>Where in the world?</h1>
      <button className='header-dark-mode' onClick={() => handleClick()}><img className='header-dark-mode-img' src={moonImg} alt='dark mode'/><span>Dark mode</span></button>
    </header>
  );
}
export default Header;