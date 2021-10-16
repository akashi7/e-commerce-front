import { useEffect } from 'react';
import { Header } from '../components/Header';
import { useHistory } from 'react-router-dom';

import mk5 from '../images/mk5.png';
import user from '../images/me.jpg';

export const ViewProduct = () => {


  useEffect(() => {
    document.title = "Product";
  }, []);
  const history = useHistory();

  const addtocart = () => {
    let items = [];

    let priceTag = (document.querySelector('.price').textContent).replace('RWF', '');
    let product_name = document.querySelector('.pro-infos').textContent;
    let price = priceTag.replace(/,/g, '');

    let quantity = 1;

    let objItems = {
      price,
      quantity,
      product_name
    };


    items.push(objItems);

    localStorage.setItem('cartItems', JSON.stringify(items));
    history.push('/products/cart');

  };

  return (
    <div>
      <Header />
      <div className="product-grid">
        <div className="left-side">
          <img src={mk5} className="pro-image" alt="product" id="simage" />
          <div className="pro-details">
            <h2 style={{ color: "#f7c52a" }} className="pro-infos">Dell xy</h2>
            <div className="prices">900,000 RWF</div>
          </div>

        </div>
        <div className="right-side">
          <h2 style={{ color: "#f7c52a" }} className="pro-info" id="Det">Details</h2>
          <div className="brand"></div>
          <div className="price" id="Det">900,000 RWF</div>
          <hr></hr>
          <h2 style={{ color: "#f7c52a" }}>About device</h2>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <button className="add-to-cart" onClick={() => addtocart()} >Add to Cart</button>
        </div>
      </div>
      <br></br>
      <div className="Reviews">
        <div className="left">
          <p style={{ color: "#f7c52a" }}>Product reviews</p>
        </div>
        <div className="right">
          <div className="align">
            <img alt="user" src={user} className="profile" />
            <p style={{ marginLeft: "10px", color: "#f7c52a" }}>Akashi</p>
          </div>
          <p>
            on 21/2/2020
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..
          </p>
          <br></br>
          <div className="align">
            <img alt="user" src={user} className="profile" />
            <p style={{ marginLeft: "10px", color: "#f7c52a" }}>joseph</p>
          </div>
          <p>
            on 21/2/2020
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <br></br>
          <div className="align">
            <img alt="user" src={user} className="profile" />
            <p style={{ marginLeft: "10px", color: "#f7c52a" }}>kukushi</p>
          </div>
          <p>
            on 21/2/2020
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
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
