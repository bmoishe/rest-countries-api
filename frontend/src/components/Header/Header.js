import './Header.css'
import moonImg from '../../images/moon-outline.svg'
function Header() {
  return (
    <header className="header">
      <h1 className='header-title'>Where in the world?</h1>
      <p className='header-dark-mode'><img className='header-dark-mode-img' src={moonImg} alt='dark mode'/><span>Dark mode</span></p>
    </header>
  );
}
export default Header;