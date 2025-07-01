import { useState, useContext, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ showLogin, setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  return (
    <div className="navbar" style={{ backgroundColor: '#27ae60', color: '#ffffff' }}>
      <Link to='/'><img className='logo' src={assets.logo} alt="MYFOODPREP Logo" /></Link>
      <ul className='navbar-menu'>
        <Link to='/' className={menu === 'home' ? 'active' : ''} onClick={() => setMenu('home')}>Home</Link>
        <a href='#food-display' className={menu === 'menu' ? 'active' : ''} onClick={() => setMenu('menu')}>Menu</a>
        <a href='#footer' className={menu === 'contact-us' ? 'active' : ''} onClick={() => setMenu('contact-us')}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <div className="dot-basket">
          <Link to='/cart'><img src={assets.basket_icon} alt="Cart" /></Link>
          <div className={getTotalCartAmount() !== 0 ? "dot" : ""}></div>
        </div>
        {
          !token
            ? <button onClick={() => setShowLogin(true)} style={{ backgroundColor: '#000000', color: '#ffffff', padding: '5px 10px', border: 'none', cursor: 'pointer' }}>Sign in</button>
            : <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="Profile" />
              <ul className='nav-profile-dropdown'>
                <Link to="/myorders"><img src={assets.bag_icon} alt="Orders" /><p>Orders</p></Link>
                <hr />
                <li onClick={logout}><img src={assets.logout_icon} alt="Logout" /><p>Logout</p></li>
              </ul>
            </div>
        }
      </div>
    </div>
  );
};

export default Navbar;