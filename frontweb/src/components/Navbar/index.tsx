import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';
import logoMain from 'assets/img/logo-main4.png';
import Profile from 'assets/img/profile2.jpg';
import Cart from 'assets/img/cart.png';
import ItemsNumber from 'assets/img/number-items.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <div className="container-logo">
            <img src={logoMain} alt="Logo Main" />
            <h4>Digital Store Games</h4>
          </div>
        </Link>

        <div className="collapse navbar-collapse" id="digitalstore-navbar">
          <ul className="navbar-nav offset-md-1 main-menu">
            <li>
              <div className="dropdown">
                <NavLink to="/" activeClassName="active" exact>
                  Home
                </NavLink>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <NavLink to="/Games" activeClassName="active">
                  Games
                </NavLink>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </li>
            <li>
              <NavLink to="/Promocoes" activeClassName="active">
                Promoções
              </NavLink>
            </li>
          </ul>
        </div>

        
        <div className="container-options">
          <div className="container-logo">
            <p>Consumidor Prime </p>

            <div className="dropdown menu-perfil">
              <NavLink to="/Games" activeClassName="active">
                <img src={Profile} alt="Profile" />
              </NavLink>
              <div className="dropdown-content">
                <a href="#">Conta</a>
                <a href="#">Pedidos</a>
                <a href="#">Logout</a>
              </div>
            </div>

            <div className="cart-container">
              <img src={Cart} alt="Cart" />
              <div className='items'>
              <img src={ItemsNumber} alt="Items" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
