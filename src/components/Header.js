import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cart from '../images/cart.png';


export const Header = () => {
  const token = localStorage.getItem('token');

  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (token) {
      setCheck(true);
    }
    //eslint-disable-next-line
  }, [token]);

  const logOut = () => {
    localStorage.clear();
  };

  const ChangeCategory = (value) => {


    if (value === 'Computer') {
      history.push('/comp');
    }
    if (value === 'Phones') {
      history.push('/phones');
    }
    else {
      return null;
    }

  };

  const history = useHistory();
  return (
    <header className="header">
      <div className="first-header">
        <div>
          <p onClick={() => history.push('/')}>AKASHI  SHOP</p>
        </div>
        <div className="search">
          <input type="text" placeholder="Search product" className="inputOne" />
          <button className="search-button">Search</button>
        </div>
        <div className="nav-links">
          <div className="cart-logo">
            <img alt='cart' src={Cart} onClick={() => history.push('/products/cart')} className="cart-i" />
            <p onClick={() => history.push('/products/cart')}>Cart</p>
          </div>
          {check ? <p onClick={() => logOut()} >loggedIn</p> : <p onClick={() => history.push('/sign')} >Sign in</p>}
        </div>
      </div>
      <div className="second-header">
        <div>
          <select className="select-menu" onChange={(e) => ChangeCategory(e.target.value)} >
            <option >All categories</option>
            <option >Computer</option>
            <option>Phones</option>
          </select>
        </div>
        <div className="nav-link">
          <p onClick={() => history.push('/')} >Home</p>
          <a href="#footer">About us</a>
          <a href="#footer" >info</a>
          <a href="#footer" >Contact us</a>
        </div>
      </div>
    </header>
  );
};

