import '../styles/Core/Reset.scss';
import '../styles/Core/Variables.scss';
import '../styles/Components/Header.scss';
import owen from '../images/owen.png';

function Header(params) {
  return (
    <header className="header">
      <h1 className="header__Title">Owen Wilson's "wow"</h1>
      <img className="header__Image" src={owen} alt="owen face" />
    </header>
  );
}

export default Header;
