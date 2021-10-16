import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { useHistory } from 'react-router-dom';

export const Cart = () => {


  const history = useHistory();
  useEffect(() => {
    document.title = "Cart";
  }, []);

  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const initialState = {
    Price: '',
    Quantity: '',
    sum: false,
    product_name: "",
    number: 1,
    loggedIn: false
  };

  const token = localStorage.getItem('token');

  const [state, setState] = useState(initialState);
  const [check, setCheck] = useState(false);

  const changeQuantity = (e, value) => {
    e.preventDefault();
    let newNumber = value + 1;
    setState({ ...state, number: newNumber });
  };
  const removeQuantity = (e, value) => {
    e.preventDefault();
    let newNumber = value - 1;
    let Number;
    ((newNumber === 0) || (newNumber < 0)) ? Number = 0 : Number = newNumber;
    setState({ ...state, number: Number });
  };


  const seeSum = (e, value, price) => {
    e.preventDefault();
    let Sum = value * price;
    setState({ ...state, sum: Sum });
    // checkLogin()

  };

  const checkLogin = () => {
    if (token) {
      setCheck(true);
    }

  };

  return (
    <div>
      <Header />
      <div className="cart">
        {!(cartItems) ? (<div className="nothing">
          <p>You have nothing in cart!!</p>
        </div>) :
          cartItems.map(({ price, product_name }) => {
            return (
              <div key={price} className="cart-product" >
                <button className="proceed-button"> {product_name} </button>
                <button className="proceed-button" id="qua" >Quantity</button><input type="number" value={state.number} />
                <button onClick={(e, i) => changeQuantity(e, state.number)} className="signs" >+</button>
                <button onClick={(e, i) => removeQuantity(e, state.number)} className="signs" >-</button>
                <button onClick={(e, i, k) => { seeSum(e, state.number, price); checkLogin(); }} className="proceed-button" >Check sum </button>
                {state.sum ? <button className="proceed-button"> sum: {state.sum} </button> : ""}
                {state.sum ? (check ? <button onClick={() => history.push('/pay')} className="proceed-button">Proceed to payment</button> : <label>Login
                  first to pay</label>) : ""}
              </div>
            );
          })}
      </div>
      <br></br>
      <br></br>
      <footer className="footer" id="footer">
        <div className="about">
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="info">
          <h3>info</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="help">
          <h3>Contact us</h3>
          <form>
            <input placeholder="Email" className="inputX" />
            <input placeholder="Elaborate" className="inputZ" />
            <button className="sendButton">Send</button>
          </form>
        </div>
      </footer>
    </div>
  );
};
